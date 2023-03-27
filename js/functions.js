document.addEventListener('DOMContentLoaded', (loaded) => {
    
    console.log('Document is ready to go.');
    
});

//function that calls to the global header and footer. 
$(document).ready(function(){

    //calling to the global header and footer
    $(function(){
         
        $("#globalHeader").load("globalHeader.html");
        $("#globalFooter").load("globalFooter.html");
        $("#globalFooter2").load("globalFooter2.html");
        
    });

    $(function(){
        
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 80){
                $(".menu-row").addClass("scrolled-menu");
            }
            
            else
            {
                $(".menu-row").removeClass("scrolled-menu");
            }
        });
        
    });

});