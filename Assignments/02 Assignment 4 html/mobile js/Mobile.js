console.log("js connected")

$(document).ready(function(){

    $.ajax({
      Type: "GET",
      datatype: "json",
      url: "mobile.json",
    
      Sucess : function (data, status, xhr){
        console.log('data')

      }
      
    });



    $(".newbutton").click(function(){
      $(".form1").toggle();
    });
});