import _ from "lodash"; 

//once webpack function is immediately invoked a click event listener will be added to the element 
document.getElementById("button1").addEventListener("click", function(){
    const el = document.getElementById("header");
    el.innerHTML = "hey I have updated the code"

    const listItems = ["Apples", "orange", "Banana"]
    const ul = document.getElementById("shoppingList"); 
    _.forEach(listItems, function(item){
        const tempEl = document.createElement("li"); 
        tempEl.innerHTML = item; 
        ul.appendChild(tempEl)
    })
}) 