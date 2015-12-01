$(document).ready(function(){


  $("#startbutton").click(function(){
    $(".start").hide();
    $(".game").show();
  })

  $('#option1 , #option2').click(function(){
    var clicks = $(this).data('clicks');
    if (clicks == 1){
    $('#option1').html('Kanye just died...');
    $('#option2').html('Kanye lives!')
  } else{
    $('#option1').html('How did Kanye come back??!?!?');
    $('#option2').html("He's dead, okay? He's really dead.")
  }
    $(this).data("clicks",!clicks);
  });


})
