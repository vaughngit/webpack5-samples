function buttonClicked(){
    const el = document.getElementById("header");
    el.innerHTML = "hey I have updated the code"

    const listItems = ["Apples", "orange", "Banana"]
    const ul = document.getElementById("shoppingList"); 
    _.forEach(listItems, function(item){
        const tempEl = document.createElement("li"); 
        tempEl.innerHTML = item; 
        ul.appendChild(tempEl)
    })
}