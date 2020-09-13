$(document).ready(function(){
    $('#myinput').keyup(function(){
    
     // Search text
     var text = $(this).val();
    
     // Hide all content class element
     $('.golden').hide();
   
     // Search and show
     $('.golden:contains("'+text+'")').show();
    
    });
   });
