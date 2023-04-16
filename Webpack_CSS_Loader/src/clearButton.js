import style from './clearButton.css'


const el = document.createElement("button"); 
el.innerHTML = "Clear"; 
//el.classList.add(["button"])
//el.classList.add([style.button])
el.classList.add(["button"]) // applying  global button style 
el.onclick = function(){
    alert("Clear clicked")
}
document.body.appendChild(el)