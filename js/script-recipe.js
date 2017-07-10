$(document).ready(function(){
	//ETAPA 8: Se imprime mensaje por consola.(me equivoqué al escribir el commit por eso hay dos Etapa 6)
	console.log("SE CARGÓ MAMITA");
	$(".js-menu").hide();
})

//ETAPA 8: agrega y saca clase
$(".js-show-make").click(function(){
	$(".page").addClass("make");

})
$(".js-show-recipe").click(function(){
	$(".recipe").removeClass("make");
})