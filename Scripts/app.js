
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

        //get page name window.location.pathname
        let name = window.location.pathname;
        let pageName = name.substring(1, name.length-5);

        switch(pageName){
            case "index": 
                // home page 
                console.log(pageName)
                DisplayHomePageContent();
                
                break; 

            case "about":
                console.log(pageName)
                DisplayAboutPageContent();
                break; 

            case "products": 
                console.log(pageName)
                DisplayProductsPageContent();
                
                break; 

            case "services":
                console.log(pageName)
                DisplayServicesPageContent();
            
                break; 

            case "contact": 
                console.log(pageName)
                DisplayContactPageContent();
                break; 

            case "projects":
                console.log(pageName)
                DisplayProjectsPageContent();
                break; 
            default:
                // console.error("The page does not exist!")
                break;
        }

        // $("#"+pageName).addClass("active");
        //change the color of avtive page in nave
        $("#"+pageName).css("color", "#E3F2FD")
        
        
       

    }

    //Home page functions
    function DisplayHomePageContent(){
        
        document.getElementById("index").className="nav-link active";

        btnLinkJs("projects.html", "projectsButton")
        // btnOpenNewinWondowLinkJquery("projects.html",".btn" )
 
    }

    function DisplayAboutPageContent(){
       
 
    }

    function DisplayProductsPageContent(){
        
       //targeting taable at proeduct's page
       $(" tr:even").css("background", "#fefbd8");
 
    }

    function DisplayServicesPageContent(){
       
       
    }

    function DisplayContactPageContent(){
        
       
 
    }

    function DisplayProjectsPageContent(){
        
       
 
    }




    //function call's btnRefById function and get tow parameters link and btn id
    function btnLinkJs(_link, btnId){
        let btn = btnRefById(btnId)
        btn.onclick=()=>{
            location.href=_link;
        } 
    }
    // getting button reference by Id
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




    // jQuery loop function $.each
    function jqueryEachLoopFunction(){
        let obj ={
            'name':'Baktash', 
            'address': '71 coe dirve', 
            'phone': '9054421991'
        };

        let colors=['blue', 'green', 'yellow', 'white'];

        $.each(obj, (k, v)=>{
            console.log(k + " : "+ v);
        });

        $.each(colors, (i , text)=>{
            console.log(i + " : " +text);
        })

        $('li').each((i)=>{
            console.log(i + " : "+$(this).text() )
        });

        // get an element html value 
        // functions can be used .text() .html() .val()
        $('.list-group-item').each((i)=>{
            console.log(i + " : "+$(".list-group-item").html() );
        });
       
    }

    //windows location functions
    function _WindowLocationFunctions(){
        console.log(window.location.pathname);
        console.log(window.location.href);
        console.log(window.location.href= "index.html")
    }
    

})(app || (app={}));``