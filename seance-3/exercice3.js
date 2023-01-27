const users=[
    {
        name:"sarah", comment:"j'aime ce poste <3"
    },
    {
        name:"monya", comment:"le poste est null :("
    },
    {
        name:"carlos", comment:"salut l'algerie"
    },
    {
        name:"sofiene",comment:"tahkich maaya :("
    }
]
function mooddetect(liste){
let etatperson = users.map(function(user){
    if(user.comment.includes("<3")){
return({name:user.name,etat:"heureux"})
    }
    else if (user.comment.includes(":("))
    {
        return({name:user.name,etat:"triste"})
    }
    else {
        return({name:user.name,etat:"neutre"})
    }
})
console.log(etatperson)
}
mooddetect(users)