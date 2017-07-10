$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);

	//ETAPA 1: ocultando flecha 
	$(".js-back").hide();

	//ETAPA 2: Ingresando nuevo texto
	function printNews(){
		$(".new-callout").append("NUEVAS TAREAS");
	}
	printNews();
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	//ETAPA 3: recorrer arreglo
	recipesArray.filter(function(e){
		if(e.highlighted == true){
			renderRecipe(e);
			//ETAPA 4: solo titulos y autores
			$(".list-recipes").append("<img src= 'img/recipes/320x350/"+ $(e).attr("name") +".jpg' class='img-recipes'><h3 class='title-recipes'>" + e.title  + "</h3><p class='author-recipes'>" + e.source.name + "</p>");
		}
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}




/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	if(activitiesArray.length > 0){
		$(".wrapper-message").hide();
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}



