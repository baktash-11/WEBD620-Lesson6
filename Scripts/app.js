
class contact {
    constructor(name="", email="", number="", message=""){
        this.name = name; 
        this.email = email; 
        this.number=number; 
        this.message= message;
    }
}



"use strict";
//class in Ecma 15
let app;
((app)=>{

    let contactObj= new contact();

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

        $("#name").select();
        
       submitBtn("name", "email", "number", "message");
       resetBtn("name-star");
       //on change methods for form inputs
       onChange("name", "Name is too short", "name-star", "alert-message-name");
       onChange("email", "Email is too short", "email-star", "alert-message-email");
       onChange("number", "Number is too short", "number-star", "alert-message-number");
       
       onFocus("name", "Focus hs been avtivated");
       restrectChar();

      
 
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


    // contact page methods (functions)

    function submitBtn(name, email, number, message){ 

        $("#btn-submit").on("click", (e)=>{


            e.preventDefault();
            //getting form data
            let _name =$("#"+name).val();
            let _email =$("#"+email).val()
            let _number =$("#"+number).val()
            let _message =$("#"+message).val()

            console.log(`Name: ${_name} Email: ${_email} Number: ${_number} Message: ${_message}`)
            contactObj.email = _email;
            contactObj.name = _name;
            contactObj.number= _number;
            contactObj.message = _message;
            console.log(contactObj);

            // clearing form using JS selector
            // document.getElementById("contact-form").reset();
            // clearing form using jquery selector 
            $("#contact-form")[0].reset();
        });
    }

    function resetAllerts(){
        $("#alert-message-name").text("");
        $("#alert-message-email").text("");
        $("#alert-message-number").text("");
        $("#name").css("background", "#fff");
        $("#email").css("background", "#fff");
        $("#number").css("background", "#fff");
        $("#message").css("background", "#fff");
        $(".star").css('color', 'gray');
        

    }

    function resetBtn(star){

        $("#btn-reset").on("click", (e)=>{
            e.preventDefault();
            if(confirm("Are you sure?")){
                $("#contact-form")[0].reset();
               resetAllerts();
            }
        });
    }

   


    // getting the lenght of name element 
    // desicription
    // elementId = input id
    // message is the alert message 
    // Stars which indicate requirement
    // alertId is the p tag where displays the message

    function onChange(elementId , message , start, alertId){

        let element = $("#"+elementId);
        
        $(element).on("blur", ()=>{
            let elementLength = element.val().length;
            if(elementLength< 4 ){
                // alert(`Name ${element.val()} is too short`)
                $("#"+start).css('color', '#ff6f69');
                $(element).css('background', 'thistle');
                $("#"+alertId).text(message);
                $(element).focus();
                $(element).select();
                console.log(element.val());
                
            }else
            {
               resetAllerts();
            }
           
        });
    }

    function onFocus(elementId , message ){
        $("#"+elementId).on("focus", ()=>{
            $("#"+elementId).select();
            console.log(message);
        });
    }


    //FUCNTION TO PREVENT A STRING ENTRY IN PHONE NUMBER 
    function restrectChar(){
        let invalidChar = ['_', '+', 'e','~','@', '#', '$', '%', '^'];
    const numberIput = $("#number");
    numberIput.on("keydown",(e)=>{
       
        if( invalidChar.includes(e.key) && e.which < 33 || e.which > 57){
            e.preventDefault();
        }
        
        
    })

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