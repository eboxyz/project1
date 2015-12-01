$(document).ready(function(){
  var count = 0

  $("#startbutton").click(function(){
    $(".start").hide();
    $(".game").show();
  })

  // $('#option1 , #option2').click(function(){
  //   var clicks = $(this).data('clicks');
  //   if (clicks == 1){
  //   $('#option1').html('Kanye just died...');
  //   $('#option2').html('Kanye lives!')
  // } else{
  //   $('#option1').html('How did Kanye come back??!?!?');
  //   $('#option2').html("He's dead, okay? He's really dead.")
  // }
  //   $(this).data("clicks",!clicks);
  // });

  $('#option1').click(function(){
      count += 1;
    if(count == 1){
      $('.textbox').html('Kim is angry at Kanye for cheating on her with Susan Boyle, What do you do?');
      $('#option1').html('Run');
      $('#option2').html('Talk');
    } else if(count ==2){
      $('.textbox').html("Good job! Kim can't get revenge if you run away from all your problems. But where are you going to go?");
      $('#option1').html('All the way to Chicago?')
      $('#option2').html("Jay's crib.");
    } else if (count== 3){
       $('.textbox').html("The plane has crashed. They actually forgot to fuel the plane. Sucks to suck.");
       $('#option1').html("You can't play anymore, Kanye's dead...");
       $('#option2').html("Nice try, I guess.");
    }
  });

  $('#option2').click(function(){
    count +=1;
    if(count == 1){
      $('.textbox').html('Kim is angry at Kanye for cheating on her with Susan Boyle, What do you do?');
      $('#option1').html('Run');
      $('#option2').html('Talk');
    } else if (count ==2) {
      $('.textbox').html('You really want to talk to Kim after you cheated? Brave man.');
      $('#option1').html('Stick with programming.');
      $('#option2').html("You don't need to be in the field of saving people.");
    }
  });

  $('#option1').click(function(){

  })




})
