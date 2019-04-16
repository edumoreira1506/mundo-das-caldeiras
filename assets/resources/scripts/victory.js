$(function(){
	$('#playAgain').click(function(){
		window.location = 'index.html';
	});
	$('#sair').click(function(){
		window.location = 'about:blank';
	});
});

function carrega(){
	let jogador = JSON.parse(window.localStorage.getItem('pessoa'));
	document.getElementById('namePlayer').innerHTML = jogador.name;
	document.getElementById('placePlayer').innerHTML = jogador.place;
}
