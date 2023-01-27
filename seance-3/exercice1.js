let persons=[
    {
        name:"moncef",age:13,
    },
    {
        name:"bahija",age:23,
    },
    {
        name:"ala",age:18,
    }
]
function mineurmajeur(p){
let person =p.map(function (liste){
    if(liste.age<18){
        liste.status="mineur"
         
    }
    else{
liste.status="majeur"

    }
    return(liste)
}) 
return(person)
}
console.log(mineurmajeur(persons))
 
/*
for(let i=0;i<persons.length;i++){
    if(persons[i].age<18){
       persons.push({status:"mineur"})
    }
    else {
        persons.push({ status:"majeur"})
    }
}*/
  
   

