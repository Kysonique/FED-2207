console.log("js connected")

$(document).ready(function(){

    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://twt-clone-2ff6a-default-rtdb.firebaseio.com/.json",
      
      sucess : function (data, status, xhr){
        console.log(data)

      }
      
    });



    $(".newbutton").click(function(){
      $(".form1").toggle();
    });
});