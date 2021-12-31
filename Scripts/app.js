
"use strict";
//class in Ecma 15
let app;
((app)=>{

    const Start = ()=>{
        
        // switch page function
        pageSwatcher();
        
    

        
       main();
      
    }

    function main () {  
        // console.log("main function is running")
    }
    
    window.addEventListener('load', Start);


    function pageSwatcher(){

        let name = window.location.pathname;
        let pageName = name.substring(1, name.length-5);

        switch(pageName){
            case "index": 
                // home page 
                console.log(pageName)
                homePageContent();
                
                
                
                break; 
            case "about":
                console.log(pageName)
                break; 
                case "products": 
                console.log(pageName)
                //targeting taable at proeduct's page
                $(" tr:even").css("background", "#E3F2FD");
                break; 
            case "services":
                console.log(pageName)
                break; 
                case "contact": 
                console.log(pageName)
                break; 
            case "projects":
                console.log(pageName)
                break; 
            default:
                // console.error("The page does not exist!")
                break;
        }

        // $("#"+pageName).addClass("active");
        //change the color of avtive page in nave
        $("#"+pageName).css("color", "#E3F2FD")
        
        
       

    }

    function homePageContent(){
        
        document.getElementById("index").className="nav-link active";

        btnLinkJs("projects.html", "projectsButton")
        // btnOpenNewinWondowLinkJquery("projects.html",".btn" )
 
    }


    //function call's btnRefById function and get tow parameters link and btn id
    function btnLinkJs(_link, btnId){
        let btn = btnRefById(btnId)
        btn.onclick=()=>{
            location.href=_link;
        } 
    }

    function btnRefById(id){
        
        return document.getElementById(id);
        
    }

    // using jquery to open a link in new window
    function btnOpenNewinWondowLinkJquery(link , btnClas){
        $(btnClas).on('click', ()=>{
            let win = window.open(link, "_blank");
            if(win){
                alert('Popups allowed for this website');
                
            }else{
                alert('Please allow popups for this website');
                window.open(link)

            }

          
        });
    }

})(app || (app={}));``