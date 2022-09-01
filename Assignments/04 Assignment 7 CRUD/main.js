$(document).ready(function(){

    $.ajax({
      Type: "GET",
      datatype: "json",
      URL: "./data.json",
      Sucess :function (data, status, xhr){
        console.log(data, users)
      }
    })



    $(".newbutton").click(function(){
      $(".form1").toggle();
    });
  });