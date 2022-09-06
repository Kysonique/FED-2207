
console.log('JS connected')

$(document).ready(function(){
  endpointUrl = "./data.json"
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "./data.json",
      success : function (data, status, xhr){
      console.log('data')
     }
      
    })



    $(".newbutton").click(function(){
      $(".form1").toggle();
    });
});