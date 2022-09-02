
console.log('JS connected')

$(document).ready(function(){

    $.ajax({
      Type: "GET",
      datatype: "json",
      url: "./Assignments\04 Assignment 7 CRUD\data.json",
    
      Sucess : function (data, status, xhr){
        console.log('data')

      }
      
    });



    $(".newbutton").click(function(){
      $(".form1").toggle();
    });
});