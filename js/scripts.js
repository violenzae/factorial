$(document).ready(function(){
  $("form#factorial").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#num").val());

    if (input === 0 || input === 1){
      input = 1;
    }
    else { 
      for(var i = input - 1; i >= 1; i--) {
      input = input * i;
      }
    }
    $("#result").text(input);
    });
  });