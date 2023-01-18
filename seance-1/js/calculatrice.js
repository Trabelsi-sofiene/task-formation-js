let x = document.querySelector("#X");
      let y = document.querySelector("#Y");


      //fonction +
      function showSomme() {
        document.querySelector("h3").innerHTML = somme(
          Number(x.value),
          Number(y.value)
        );
      }
      function somme(x, y) {
        return "ADD : " + (x + y);
      }

     //fonction -
      function showminus(){
        document.querySelector("h3").innerHTML= minus(Number(x.value),Number(y.value));
      }
      function minus(x,y){
        return "Subtraction : " + (x-y);
      }

      //fonction *
      function showtimes (){
        document.querySelector("h3").innerHTML= times(Number(x.value),Number(y.value));
      }
      function times (x,y){
        return "Multiplication : " +(x*y)
      }

      //function / 
      function showover(){
        document.querySelector("h3").innerHTML= over(Number(x.value),Number(y.value));

      }
      function over(x,y){
        return "Division : " +(x/y)
      }
      
