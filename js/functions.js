document.addEventListener('DOMContentLoaded', (loaded) => {
    
    console.log('Document is ready to go.');
    
});


//create function that will call to the global header and footer. 

$(document).ready(function(){

    //calling to the global header and footer
    $(function(){
         
        $("#globalHeader").load("globalHeader.html");
        $("#globalFooter").load("globalFooter.html");
        
    });

});