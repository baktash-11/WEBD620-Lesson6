
"use strict";
//class in Ecma 15
let app;
((app)=>{

    const Start = ()=>{
       
        let mainContent = $("#mainContent")[0];
        console.log(mainContent);

        // $('.display-4').hide(3000); 
        
        
        document.getElementById('index').style.display='non'


       main();
      
    }

    function main () {  
        console.log("main function is running")
    }
    
    window.addEventListener('load', Start);

})(app || (app={}));``