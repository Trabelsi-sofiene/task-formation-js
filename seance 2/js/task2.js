let button1=document.getElementById ('button1')
let liste1=document.getElementById('liste1')
let liste2=document.getElementById('liste2')
let input=document.querySelector('input')
button1.addEventListener('click',ajouter); 


 function ajouter(){
    
 if (input.value==""){
        alert("please enter an element")
       }
       else {
        liste1.innerHTML+=`<li> ${input.value}</li>`+`<button onclick="changer()" id='button2'>vacciné(e)</button>`;
      input.value="";
}}
let button2=document.getElementById ('button2');
button2.addEventListener('click',changer);
function changer(){
   liste2.innerHTML+=`<li> ${liste1.innerHTML}</li>`
}
