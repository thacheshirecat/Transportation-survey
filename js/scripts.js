$(document).ready(function(){

  $("form#transportation-survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation-survey').hide();
    $('#fun-survey').show();
  });
  $("form#fun-survey").submit(function(event){
    event.preventDefault();
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $("#fun-survey").hide();
  });
});
