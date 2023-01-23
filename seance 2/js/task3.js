let button=document.querySelector("button")
let input1=document.querySelector("#text")
let input2=document.querySelector('#file')
let liste=document.querySelector('ul')
button.addEventListener('click',ajout)

function ajout(){
    if (input1.value==""){
        alert("erreur")
    }else {
      liste.innerHTML+=`<button onclick="effacer()">supprimer</button>  <li> ${input1.value}</li> <li>${input2.value}`
    }
    
}
input1.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      ajout();
    }
  })
 function effacer(e) {
        let id = e.target.parentElement.id;
        let elementToDelete = document.getElementById(id);
        console.log(elementToDelete);
        elementToDelete.remove();
      }