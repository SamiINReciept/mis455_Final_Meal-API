function connect(){
    var searchTerm = document.getElementById("searchTerm").value;
    searchTerm.value = "";
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`

    fetch(url)
    .then(res => res.json())
    .then(data => display(data));
}

function display(data) {
    var id = data.idMeal;
    var name = data.strMeal;
    var image = data.strMealThumb;
    var area = data.strArea;
    var instructions = data.strInstructions;
    console.log(data);
}   