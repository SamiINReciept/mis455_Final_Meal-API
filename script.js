function connect(){
    var searchTerm = document.getElementById("searchTerm").value;
    searchTerm.value = "";
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`

    fetch(url)
    .then(res => res.json())
    .then(data => display(data.meals));
}

function display(data) {
    
    console.log(data);
    var oldContainer = document.getElementById("card");
    
    oldContainer.textContent = "";
    
    for (var i = 0; i<data.length; i++){
        var newDiv = document.createElement("div"); 
        
        var name = data[i].strMeal;
        var id = data[i].idMeal;
        var image = data[i].strMealThumb;
        var area = data[i].strArea;
        var instructions = data[i].strInstructions;

        newDiv.innerHTML = `<div class="row g-0">
                                <div class="col-lg-4 col-md-6">
                                <img src="${image}" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-lg-8 col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title">${name}</h5>
                                    <h5 class="card-title-meal">Meal ID: ${id}</h5>
                                    <p class="card-text-area">Area: ${area}</p>
                                    <p class="card-text"><small class="text-body-secondary">${instructions}</small></p>
                                </div>
                                </div>
                            </div>`;
        
        oldContainer.appendChild(newDiv);

    }
}