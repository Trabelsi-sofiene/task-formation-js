let input= document.querySelector('input')
let button=document.querySelector('button')
let liste=document.querySelector('ul')
button.addEventListener('click',ajout)
button.addEventListener('click',effacer)
document.onkeyup=changer;
      function changer(){
           button.innerHTML="Ajouter "+input.value+" a la liste "
      }
      
      function effacer(){
         button.innerHTML="ajouter a la liste"
      }

function ajout(){
   if (input.value==""){
    alert("please enter an element")
   }
   else {
    
    liste.innerHTML+= `<li> ${input.value}</li>`
    input.value=""
   }

}
input.addEventListener("keypress", function (e) {
   if (e.key == "Enter") {
     ajout();
   }
 })




