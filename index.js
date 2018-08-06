function init() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

var createRecipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}
 
var template = Handlebars.compile(document.getElementById("my-template").innerHTML);
var html = template(recipe);
