let salom1 = document.getElementById ("salom");

   var isDark = false

   salom1.addEventListener("click",salom)

   function salom(){

      isDark=!isDark
      if(isDark){
         document.body.style.transition = "0.27s";
         document.body.style.background = "#000";
      } else{
         document.body.style.transition = "0.27s";
         document.body.style.background = "#fff";

      }

      
   console.log(isDark)

   }
   console.log(isDark)



   let  toxir = document.querySelector("ok")

   var isDar = false

   toxir.addEventListener("click",ok)

   function ok(){
      isDar=!isDar
      if(isDar){
         document.body.style.backgroundColor = "#000"
         document.body.style.Color = "#fff"
      }else{
         document.body.style.backgroundColor = "#fff"
         document.body.style.Color = "#000"
      }
   }