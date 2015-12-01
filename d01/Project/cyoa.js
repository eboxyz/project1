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
       $('#option2').html("Nice try, I guess."); //gameover
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
      $('#option2').html("Moral of the story is keep running from your problems."); //gameover
    } else if(count ==7){
      $('.textbox').html("Wow! A musical genie is waiting for you at your studio. He introduces himself as DJ Khaled. He's mad that you haven't hit him up for a song in a while. You have to answer his questions properly in order to pass.");
      $('#option1').html("Are you ready to answer?");
      $('#option2').html("Does it really matter if you are?")
    } else if(count ==8){
      $('.textbox').html("Generic question here.");
      $('#option1').html("Generic answer 1"); //this one is death
      $('#option2').html("Generic answer 2"); //this one is life
    } else if (count ==9){
      $('.textbox').html("You ain't smart enough for DJ Khaled");
      $('#option1').html("Blat blat blat"); //something new pls
      $('#option2').html("I can't think of anything witty for this.") // LOL CHANGE THIS
    } else if (count ==10){
      $('.textbox').html("Haha, another one bites the dust.");
      $('#option1').html("It really just isn't your day.");
      $('#option2').html("It REALLY isn't your day.") //gameover
    } else if (count == 11){
      $('.textbox').html("Looks like you survived the genie's intellectual barrage. He's been smitten by the North American Goddess of music, Drake. There's a golden spatula left behind, do you take it?");
      $('#option1').html("Yes");
      $('#option2').html("It's your choice, but why wouldn't you take a golden spatula...");
    } else if(count ==12){
      $('.textbox').html("You're overcome by tremendous hunger and thirst, where do you go?");
      $('#option1').html("Feed your hunger.");
      $('#option2').html("Fuel your thirst.");
    } else if(count ==13){
      $('.textbox').html("You have the option of what you want to eat.");
      $('#option1').html("There's a gold flake topped chocolate mousse cake though"); //you die
      $('#option2').html("Trust me, you'll want to fuel your thirst instead.");
    } else if(count ==14){
      $('.textbox').html("That gold is actually a new genus of poisonous fungi, that exclusively grows on chocolate mousse cakes.");
      $('#option1').html("I even gave you the right choice in the last one. Are you paying attention?");
      $('#option2').html("You need to fuel your thirst."); //gameover
    } else if(count ==15){
      $('.textbox').html("You can choose anything you want! Wow! But you can choose only one thing of what you want, and you have to eat a whole plate of it. You also only have two options. What a surprise.");
      $('#option1').html("Beets");
      $('#option2').html("Chopped Black Olives");
    } else if(count ==16){
      $('.textbox').html("Someone likes their Beets. Too bad Dr. Dre's suing you for copyright infringement. Sucks to suck.");
      $('#option1').html("Bears, Beets.")
      $('#option2').html("Battlestar Galactica.") //gameover
    } else if(count ==17){
      $('.textbox').html("SpongeBob: 'Looks like you're a pretty good chef. I am too.'")
      $('#option1').html("something something accept challenge");
      $('#option2').html("if you don't ahve a spatula, you should've picked it up earlier lol...");//there sould be a gameover alert here if you didn't pick the spatula
    } else if(count ==18){
      $('.textbox').html("SpongeBob declares the challenge is to cook the best Krabby Patty. What's your first move?");
      $('#option1').html("Grill Meat");
      $('#option2').html("Chop Veggies");
    } else if(count==19){
      $('.textbox').html("You're really grilling the meat first? Real plebian of you. However, it is the proper way to make a gourmet Krabby Patty. What's next, Gordon Ramsey?");
      $('#option1').html("Toast Buns");
      $('#option2').html("Serve as is");
    } else if(count==20){
      $('.textbox').html("Imbecile! The judges are all on the Atkins diet, and deathly afraid of ingesting anytype of carbohydrates.");
      $('#option1').html("These buns are from your local grocer aren't they.")
      $('#option2').html("The esteemed judges only eat farm to table, gluten free products.") //gameover
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
      $('#option2').html("You don't need to be in the field of saving people."); //gameover
    } else if( count ==3){
      $('.textbox').html("Cool, you made it to Jay's house. What do you want to do?");
      $('#option1').html("Talk to Jay.");
      $('#option2').html("Play with Blue Ivy.");
    } else if( count ==4){
      $('.textbox').html("Freak accident...Blue Ivy choked Kanye to death with a slinky.");
      $('#option1').html("Why didn't Kanye fight back?");
      $('#option2').html("He's a pacifist."); //gameover
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
      $('#option2').html("I heard the movie got some pretty good reviews though."); //gameover
    } else if(count ==8){
      $('.textbox').html("Generic question here.");
      $('#option1').html("Generic answer 1"); //this one is death
      $('#option2').html("Generic answer 2"); //this one is life
    } else if(count ==9){
      $('.textbox').html("Good job. You smort. Generic question 2 here.");
      $('#option1').html("Generic answer 1"); //this one is still death
      $('#option2').html("Generic answer 2"); //this one is still life
    } else if(count ==10){
      $('.textbox').html("You almost there, You the best. Generic question 3 here.");
      $('#option1').html("Generic answer 1"); //this one lives
      $('#option2').html("Generic answer 2"); //this one lives too
    } else if(count ==11){
      $('.textbox').html("Looks like you survived the genie's intellectual barrage. He's been smitten by the North American Goddess of music, Drake. There's a golden spatula left behind, do you take it?");
      $('#option1').html("Yes");
      $('#option2').html("It's your choice, but why wouldn't you take a golden spatula...");
    } else if(count ==12){
      $('.textbox').html("You're overcome by tremendous hunger and thirst, where do you go?");
      $('#option1').html("Feed your hunger.");
      $('#option2').html("Fuel your thirst.");
    } else if(count ==14){
      $('.textbox').html("You decide to go to the Krusty Krab, where dreams come true. You get the option to satisfy your hunger or your thirst again.");
      $('#option1').html("Do you choose the free salad bar?");
      $('#option2').html("Do you choose the $5.00 small 2oz drink?");
    }else if (count ==15){
      $('.textbox').html("You died.");
      $('#option1').html("These can't all be witty.");
      $('#option2').html("But really, this one wasn't too hard.") //gameover
    } else if (count==16){
      $('.textbox').html("Them olives up to something. Justin Timberlake hands you a bottle of Olive Juice, and whispers 'Olive Juice...' sensually in your ear. He whisks you away, taking you to a local park. Spongebob approaches you.");
      $('#option1').html("Do you talk to him?");
      $('#option2').html("You could just ignore him too. If you wanna be a mean guy.");
    } else if (count==17){
      $('.textbox').html("Neptune instantly smites you.");
      $('#option1').html("You're a jerk you know that?");
      $('#option2').html("Be a nice guy for once."); //gameover
    } else if(count==19){
      $('.textbox').html("Who chops the vegetables first? What are you some kind of culinary prodigy?");
      $('#option1').html("That'll show you.");
      $('#option2').html("You were doomed to fail as soon as you pressed 'Start Game'.") //gameover
    } else if(count ==20){
      $('.textbox').html("You....You're incredible! Your skill as a chef has no peer. We are truly humbled being able to eat a hamburger so divine. We have no choice but to annoint you as head chef of Animal LA, and Son of a Gun.")
      $('#option1').html("You've done it!");
      $('#option2').html("Although, Spongebob is off to the side crying.");
    } else if(count ==21){
      $('.textbox').html("Your ascendance to the top of the culinary world has brought you massive acclaim, and even greater influence than you previously held as a figurehead of rap and fashion culture. With this influence, you are able to withstand Kim Kardashian's revenge plots, and you happily move to England with your new Bae, Susan Boyle.")
      $('#option1').html("Congratulations.");
      $('#option2').html("You win, I guess.");
    }
  });



  })

