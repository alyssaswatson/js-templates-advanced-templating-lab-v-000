function init() {
  //put any page initialization/handlebars initialization here
}

function createRecipe() {
    var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;

    var ingredientList = Array.from(document.getElementsByName("ingredients"));
    var allIngredients = ingredientList.map(obj => obj.value);
    var ingredients = allIngredients.filter(obj => obj !== "");
    document.getElementsByTagName("main")[0].innerHTML = recipeTemplate({'name': name, 'description': description, 'ingredients': ingredients}); 
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
