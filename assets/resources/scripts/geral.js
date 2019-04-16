$(function(){
	$('a.scroll').click(function(){
	$('html, body').animate({
	scrollTop: $( $(this).attr('href') ).offset().top
	}, 2500);
	return false;
	});


	$('#validationButton').click(function(){
		var texto = "os campos inválidos são:";

		if(!document.getElementById('inputName').checkValidity()){
			texto = texto + " Nome";
		}
		if(!document.getElementById('inputAge').checkValidity()){
			texto = texto + " Idade";
		}
		if(!document.getElementById('inputPlace').checkValidity()){
			texto = texto + " Cidade";
		}
		if(!document.getElementById('inputCpf').checkValidity()){
			texto = texto + " CPF";
		}

		if(texto.length > 24){
			window.alert(texto);

		}else{
			window.scroll({
				top: $('.interative').offset().top,
				left: 0,
				behavior: 'smooth'
			})
		}
	});

	$('#form-validation').submit(function(e){
		var name  = document.getElementById('inputName').value;
		var age  = document.getElementById('inputAge').value;
		var place  = document.getElementById('inputPlace').value;
		var cpf  = document.getElementById('inputCpf').value;
		var phrase  = document.getElementById('inputPhrase').value;

		pessoa = new Capture(name, age, place, cpf, phrase);
		console.log(pessoa);

	    //quando o evento submit é disparado, ele lança o evento false para evitar que a página atualize


	    takeId('dinamicText').innerHTML = `&nbsp; &nbsp; &nbsp; Olá, ${pessoa.name}, uma pena você torcer para o ${team}! Enquanto você estava em ${pessoa.place}, você acabou se distraindo e caiu em um túnel do tempo que trouxe você até aqui... 
	    <br>&nbsp; &nbsp; &nbsp;Poxa vida, ${pessoa.age} aninhos e já está nessa hein?! Complicado. Vamos lá!
	    Nós já sabemos que ${pessoa.phrase} e que seu CPF é ${pessoa.cpf}. 
	    <br>&nbsp; &nbsp; &nbsp;Agora que você está no mundo das caldeiras, todas suas próximas escolhas irão impactar no decorrer da história,
	    pense bem antes de fazer uma decisão... 
	    <br><br>&nbsp; &nbsp; &nbsp;Você tem alguns itens para te ajudar: <b>Uma mochila, uma garrafa, uma panela, um isqueiro e uma picareta.</b> Você está em um
	    campo aberto e ao lado esquerdo enxerga uma fonte de água que parece ser limpa, do outro lado encontra uma floresta que pode
	    ser explorada, qual é sua escolha?`;

	    window.localStorage.setItem("pessoa",JSON.stringify(pessoa));



		e.preventDefault();
	    return false;       
	})

		$('#inputCpf').keypress(function(e){
			var n = e.keyCode;
			if(!(n>44 && n<58)){
				e.preventDefault();
			}
		});

		$('#inputName').keypress(function(e){
			var n = e.keyCode;
			if(n>43 && n<58){
				e.preventDefault();
			}
		});

		$('#inputPhrase').keypress(function(e){
			var n = e.keyCode;
			if(!( n == 80 ||  n == 72 ||  n == 32 ||  n == 233 ||  n == 103 ||  n == 97 ||  n == 109 ||  n == 98 ||  n == 105 ||  n == 114)){
				e.preventDefault();
			}
		});

		$('.interative .buttons span').mouseover(function(e){
			let hoverImage = $(this).children().attr('data-hover');

			$(this).children().attr('src',hoverImage);
		});
		$('.interative .buttons span').mouseout(function(e){
			let imagemPadrao = $(this).children().attr('data-padrao');
			$(this).children().attr('src',imagemPadrao);

			//$(this).children().src(hoverImage)
		});

		//click na explorar e vai para página dois de exploração
		takeId('explore').addEventListener('click', function(){
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
			rightToLeft('one','two');
		})

		//click na página de encontrar água que vai para página três de encontrou água
		takeId('drinkWater').addEventListener('click', function(){
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
			rightToLeft('one','three');
		})

		//entrou na caverna e morreu
		takeId('cave').addEventListener('click', function(){
			window.location = 'dead.html';
		})

		//ferveu a água e foi para próxima página
		takeId('boil').addEventListener('click', function(){
			rightToLeft('three','four');
		})

		//tomou água sem ferver e faliceu
		takeId('drinkWaterOther').addEventListener('click', function(){
			window.location = 'dead.html';
		})

		//comeu as plantas e faleceu
		takeId('eat').addEventListener('click', function(){
			window.location = 'dead.html';
		})

		//continuou explorando
		takeId('otherExplore').addEventListener('click', function(){
			rightToLeft('four','five');
		})

		//não entrou na caverna e foi explorar
		takeId('forest').addEventListener('click', function(){
			rightToLeft('two','five');
		})

		//se continuar explorando morre
		takeId('forestContinue').addEventListener('click', function(){
			window.location = 'dead.html';
		})

		//escolheu sair da floresta e ir para o campo
		takeId('camp').addEventListener('click', function(){
			rightToLeft('five','six');
		})

		//ignora e morre
		takeId('ignore').addEventListener('click', function(){
			window.location = 'dead.html';
		})

		//vai para direção da nave
		takeId('see').addEventListener('click', function(){
			rightToLeft('six','seven');
		})

		//ganha o jogo
		takeId('continue').addEventListener('click', function(){
			window.location = 'victory.html';
		})

});
