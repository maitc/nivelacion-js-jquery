$(document).ready(function(){
	//ETAPA 8: Se imprime mensaje por consola.(me equivoqué al escribir el commit por eso hay dos Etapa 6)
	console.log("SE CARGÓ MAMITA");
	$(".js-menu").hide();
})

//ETAPA 8: agrega y saca clase
$(".js-show-make").click(function(){
	$(".page").addClass("make");
	//ETAPA 9: agrega y saca clase
	$(".js-show-make").addClass("active");
	$(".js-show-recipe").removeClass('active');

})
//ETAPA 8: agrega y saca clase
$(".js-show-recipe").click(function(){
	$(".recipe").removeClass("make");
	//ETAPA 9: agrega y saca clase.
	$(".js-show-recipe").addClass("active");
	$(".js-show-make").removeClass('active');
})

//ETAPA 10: se le agrega funcion que redirecciona al otro index.
$(".js-back").click(function(){
	$(".js-back").attr("href", "index.html");
})