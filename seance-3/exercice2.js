const str1 ="ahmed&ferah-moez&saadi-fadhel&gadihi";
function formattoarray(str){
   const liste1 =str.split('-')
   const liste2=[];

    for(let i=0;i<liste1.length;i++){
        liste2.push(liste1[i].split('&'))

    }

        let liste3=liste2.map(function(aabed){
            return({firstname:aabed[0],lastname:aabed[1]})

    })

   console.log(liste3)
   console.log(liste1)
   console.log(liste2)
}
console.log(formattoarray(str1))