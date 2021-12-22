
"use strict";
//class in Ecma 15
let app;
((app)=>{

    const Start = ()=>{
       







       main();
      
    }

    function main () {  
        console.log("main function is running")
    }
    
    window.addEventListener('load', Start);

})(app || (app={}));