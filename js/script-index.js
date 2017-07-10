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
			$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>" +  e.title + "</span><span class='metadata-recipe'><span class='author-recipe'>" + e.source.name + "</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span> </span></span></span><img src='img/recipes/320x350/"+ $(e).attr("name") +".jpg'></a>");
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
	//ETAPA 5: ocultar div.
	
	if(activitiesArray.length > 0){
		$(".wrapper-message").hide();
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
renderActivity(activitiesArray);
function renderActivity(recipe) {
	//ETAPA 6: actividad
	recipe.forEach(function(e){
		$(".list-activities").append("<a href='#'' class='item-activity'><span class='attribution'><span class='avatar'><img src='" + e.userAvatar + "'class='image-avatar'></span><span class='meta'><span class='author'>" + e.userName + "</span> made <span class='recipe'>" + e.recipeName + "</span>: " + e.text + "<span class='location'>" + e.place +"</span></span></span><div class ='bg-image' style='background-image:url("+ $(e).attr("image") + ");'></div></a>"); 
	})
}



