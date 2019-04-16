let takeId = function(id){ 
	return document.getElementById(id);
}

var start = function(){
	do{
		team = window.prompt("Qual time você torce?");
		
	}while(team == '');
	
	window.alert("Não nos responsabilizamos pelo o que pode acontecer! Boa sorte!")
	var ok = window.confirm("Tem mesmo certeza que deseja entrar nessa página?")
	if(ok == false)
		window.close();
	key = setInterval(counting, 1000);
	setTimeout(doThis, 12000);
}

var currentNumber = 10;
var counting = () => {
	takeId('number').innerHTML = currentNumber;
	currentNumber--;
	if(currentNumber == -1){
		clearInterval(key);
	}
}

function doThis(){
	rightToLeft('zero','one');
	takeId('body').classList.remove('breakScroll');
}

var Capture = function(name, age, place, cpf, phrase){
	this.name = name;
	this.age = age;
	this.place = place;
	this.cpf = cpf;
	this.phrase = phrase;
}
