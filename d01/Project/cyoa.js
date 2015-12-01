$(document).ready(function(){
  var count = 0

  $("#startbutton").click(function(){
    $(".start").hide();
    $(".game").show();
  });

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
    } else if(count == 4){
      $('.textbox').html("Cool, you made it to Jay's house. What do you want to do?")
      $('#option1').html("Talk to Jay.");
      $('#option2').html("Play with Blue Ivy.");
    } else if(count == 5){
      $('.textbox').html("Jay doesn't agree with your actions, but he won't judge you for your choice.");
      $('#option1').html("Should you come clean?");
      $('#option2').html("Keep running away, Jay won't stand for this, and he won't offer you refuge.");
    } else if (count ==6){
      $('.textbox').html("Didn't you learn the first time? Talking to Kim won't solve anything!");
      $('#option1').html("Really now...");
      $('#option2').html("Moral of the story is keep running from your problems.");
    } else if(count ==7){
      $('.textbox').html("Wow! A musical genie is waiting for you at your studio. He introduces himself as DJ Khaled. He's mad that you haven't hit him up for a song in a while. You have to answer his questions properly in order to pass.");
      $('#option1').html("Are you ready to answer?");
      $('#option2').html("Does it really matter if you are?")
    } else if(count ==8){
      $('.textbox').html("Generic question here.");
      $('#option1').html("Generic answer 1"); //this one is death
      $('#option2').html("Generic answer 2"); //this one is life
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
    } else if( count ==3){
      $('.textbox').html("Cool, you made it to Jay's house. What do you want to do?");
      $('#option1').html("Talk to Jay.");
      $('#option2').html("Play with Blue Ivy.");
    } else if( count ==4){
      $('.textbox').html("Freak accident...Blue Ivy choked Kanye to death with a slinky.");
      $('#option1').html("Why didn't Kanye fight back?");
      $('#option2').html("He's a pacifist.");
    } else if(count == 5){
      $('.textbox').html("Jay doesn't agree with your actions, but he won't judge you for your choice.");
      $('#option1').html("Should you come clean?");
      $('#option2').html("Keep running away, Jay won't stand for this, and he won't offer you refuge.");
    } else if(count ==6){
      $('.textbox').html("Jay wants to know, where are you going to go?");
      $('#option1').html("Go to the studio, music's always been your savior.");
      $('#option2').html("There's a indie film showing that you've been wanting to see, It's Runaway, directed by you.")
    } else if(count ==7){
      $('.textbox').html("There's one other person in the theater. He's a world renowed Illuminati hunter, supposedly hunting Jay-z. But I guess you'll have to do.");
      $('#option1').html("You're a real stand-up guy, Kanye.");
      $('#option2').html("I heard the movie got some pretty good reviews though.");
    }
  });



  })

