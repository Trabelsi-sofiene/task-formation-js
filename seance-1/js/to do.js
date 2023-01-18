
let button = document.querySelector("button");

let liste = document.querySelector("ul");

let input = document.querySelector("input");



button.addEventListener("click", addTodo);

function addTodo() {
    
    if(input.value==''){
        alert('erreur')
    }else {
  liste.innerHTML += `<li> <input type="checkbox" class="box" > ${input.value} <input type="button" value="delete" onclick="effacer()"> </li>`;
  input .value="";
    }
}
function effacer(){
    const element = document.getElementById(liste.innerHTML);
element.remove();
   
}




   


