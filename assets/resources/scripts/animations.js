 var rightToLeft = function(screenOut, screenIn){
 	takeId(screenIn).style.right = '0';
	$('#' + screenOut).fadeOut(2000);
 }