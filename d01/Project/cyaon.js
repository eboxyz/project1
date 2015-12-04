function Choice(choice, validity){
  this.choice = choice;
  this.validity = validity;
};

function Feed(reply){
  this.reply = reply;
};

function Answer(option, answer, remark){
  this.option = option;
  this.answer = answer;
  this.remark = remark;
};

// var validity = function(choice){
//      if (!choice["valid"]){
//           alert('youdead');
//         }; // 0 false, 1 true
// };

var feeds = [
  new Feed("Kim is angry at Kanye for cheating on her with Susan Boyle! What do you do?"),
  new Feed("Good job! Kim can't get revenge if you run away from all your problems. But where are you going to go?"),
  new Feed("Cool, you made it to Jay's house. What do you want to do?"),
  new Feed("Jay doesn't agree with your actions, but he won't judge you for your choice."),
  new Feed("Jay wants to know, where are you going to go?"),
  new Feed("Wow! A musical genie is waiting for you at your studio. He introduces himself as DJ Khaled. He's mad that you haven't hit him up for a song in a while. You have to answer his questions properly in order to pass. Here's the first question. Who da best?"),
  new Feed("Good job, you smwort. Here's anotha one. If you have a cold hot pocket, is it just a pocket?"),
  new Feed("You doin' good, you almost there. This is the last one: What's the difference between a piano, a tuna, and a pot of glue?"),
  new Feed("Looks like you've survived the genie's intellectual barrage. He's been smitten by the North American Goddess of Music, Drake. There's a gold spatula left behind in his smoldering ashes, do you take it?"),
  new Feed("You're overcome by hunger and thirst, which do you satisfy?"),
  new Feed("You have an option for what you want to eat."),
  new Feed("You decide to go to the Krusty Krab, to quench your thirst. You have options!"),
  new Feed("Wow!! You can choose anything you want! And you can have a whole plate of it! But only that one plate, and that one thing. This isn't a charity, y'know. - Mr. Krabs"),
  new Feed("Spongebob declares a challenge to you, Whoever can cook the better Krabby Patty is the winner."),
  new Feed("What's the first move?"),
  new Feed("You're really grilling the meat first? Real plebian of you. However, it is the proper way to make a gourmet Krabby Patty. What's next, Gordon Ramsey?"),
  new Feed("You....You're incredible! Your skill as a chef has no peer. We are truly humbled being able to eat a hamburger so divine. We have no choice but to annoint you as head chef of Animal LA, and Son of a Gun.","You've really done it!","Although SpongeBob is off to the side crying..."),
]

var rchoices = [
  new Choice("Run",1),
  new Choice("Let's go see Jay, You want to see your friend",1),
  new Choice("Talk to Jay",1),
  new Choice("You can keep running, but you can't stay with Jay anymore.",1),
  new Choice("Music has always been your refuge, to the studio we go!",1),
  new Choice("We da best",1),
  new Choice("No...",1),
  new Choice("You can tuna piano, but you can't piano a tuna",1),
  new Choice("Yes",1),
  new Choice("Quench your thirst",1),
  new Choice("Do you go to the free salad bar?",1),
  new Choice("Chopped black olives",1),
  new Choice("Just talk to him, he's not that bad...",1),
  new Choice("Accept, if you're not a loser.",1),
  new Choice("Grill the meat",1),
  new Choice("Serve as is",1),
// new choice(,0),
]
var wchoices = [
  new Choice ("Talk",0),
  new Choice ("Let's go to Chicago, I want to go home.",0),
  new Choice ("Play with Blue Ivy",0),
  new Choice ("Should you come clean to Kim?",0),
  new Choice ("There's a showing of your indie film, Runaway, showing at a nearby theater, and you've been meaning to watch it.",0),
  new Choice ("You da best.",0),
  new Choice ("What?",0),
  new Choice ("Wait what about the glue...?",0),
  new Choice ("No",1),
  new Choice ("Feed your hunger",0),
  new Choice ("Or pay $5.00 for a 2oz drink?",0),
  new Choice ("Beets",0),
  new Choice ("Do you ignore him? You're such a jerk.",0),
  new Choice ("Accept...ing defeat",0),
  new Choice ("Chop the vegetables",0),
  new Choice ("Toast the buns",0),
]
var responses = [
  new Answer("This is really straightforward.", "Like...it tells you that he'll die.","Don't be dumb."),
  new Answer("You really want to talk to Kim after you cheated on her? You're a brave man.","Should just stick with programming.","Leave saving lives for the professionals."),
  new Answer("The plane actually forgot to refuel before it took off. Yeah. You died.","It's actually kind of eerie how it happened.","Because you landed in Lake Erie. Hah."),
  new Answer("Freak accident. Blue Ivy choked Kanye to death with a slinky.","Why didn't Kanye fight back?","He wanted to be Blue Ivy's pacifier."),
  new Answer("Didn't you learn the first time? Talking to Kim won't solve anything.","Simple moral to this story:","Run away from all your problems."),
  new Answer("There's another person in the theater, the world renowned Illuminati Hunter: Smush Parker.","Yup, he was trying to hunt down Kobe Bryant while he was on the Lakers.","His goal was to catch Jay-Z today, but you'll do I guess."),
  new Answer("You ain't smwort enough for DJ Khaled.","Anotha one bites the dust.","You a genius!"),
  new Answer("You needa work on yourself.","It really isn't your day.","It REALLY isn't your day."),
  new Answer("I thought you'd get stuck there!","Yeah.","Dadjokes 'r us."),
  new Answer("This option doesn't really exist","Testing.","1,2,3"),
  new Answer("Hungry...","Every restaurant is declining you service...","DAMN YOU, KIM KARDASHIAN!!!"),
  new Answer("I mean, there's really no clear-cut answer here.", "I'm just a dick.", "At least you know which one not to choose next time."),
  new Answer("Someone likes their nutrients. Too bad Dr. Dre was waiting to hit you with a lawsuit for copyright infringement.","Bears, Beets.","Battlestar Galactica"),
  new Answer("Neptune smites you on the spot.","You're a real jerk you know that?","Try being nice one time, maybe you'll like it. Jerk."),
  new Answer("Looks like you died.","These can't all be sassy.","But really this one wasn't that hard."),
  new Answer("Who chops the vegetables first? What are you some kind of culinary prodigy?","That'll show you.","You were doomed the second you started this dumb game."),
  new Answer("Imbecile! The judges are all on the Atkins diet, and deathly afraid of ingesting anytype of carbohydrates.","These buns are from your local grocer aren't they? Generic store brand. Ugh.","The esteemed judges only eat organic, farm-to-table, gluten-free products. Do your research next time."),
  new Answer(),
  new Answer("Your ascendance to the top of the culinary world has brought you massive acclaim, and even greater influence than you previously held as a figurehead of rap and fashion culture. With this influence, you are able to withstand Kim Kardashian's revenge plots, and you happily move to England with your new Bae, Susan Boyle.","Congratulations, I guess.","What more do you want? You've won the game already. Go outside and do something."),
]

//change response[0] (logic is breaking the response html)


$(document).ready(function(){
  var count = 0
  var option1 = 1
  var option2 = 0

  $("#startbutton").click(function(){
    $(".start").hide();
    $(".game").show();
    });//startbutton
// var randomDivs = $("div.child").get().sort(function(){
//      return Math.round(Math.random())-0.5;
// });
// $(randomDivs).appendTo(randomDivs[0].parentNode).show();

  var loadOptions = function(count){
    $('.textbox').html(feeds[count].reply);
    array = [rchoices, wchoices]
    // enter shuffle function
    function shuffle(){
        $(".optionz").each(function(){
            var divs = $(this).find('div');
            for(var i = 0; i < divs.length; i++)
              $(divs[i]).remove();
          });
      };
    $('#option1').html(array[0][count].choice);
    $('#option2').html(array[1][count].choice);
    option1 = array[0][count].validity;
    option2 = array[1][count].validity;
  };//game works here


   $('#option1').click(function(){
    if (option1 == 1){
      loadOptions(count);
      count += 1
    } else if(option1 === 15){
      $('#winner').show();
      $('.textbox').html(responses[17].option);
      $('#option1').html(responses[17].answer);
      $('#option2').html(responses[17].remark);
    } else if(option1 == 16){
      $('.textbox').html(responses[18].option);
      $('#option1').html(responses[18].answer);
      $('#option2').html(responses[18].remark);
      $('#winner').show();
    } else {
      $('.game').hide();
      $('.death').show();
      $('.deathbox').html(responses[count].option);
      $('#doption1').html(responses[count].answer);
      $('#doption2').html(responses[count].remark)
    }
   });//option1

   $('#option2').click(function(){
      if (option2 === 1){
      loadOptions(count);
      count += 2
    } else if(option2 >= 9) {
      $('.game').hide();
      $('.death').show();
      $('.deathbox').html(responses[count+1].option),
      $('#doption1').html(responses[count+1].answer),
      $('#doption2').html(responses[count+1].remark) //is this necessary, i think it is
    }else if(option2 === 15){
      $('#winbtn').show();
      $('.textbox').html(responses[17].option);
      $('#option1').html(responses[17].answer);
      $('#option2').html(responses[17].remark);
    }else if(option2 == 16){
      $('.textbox').html(responses[18].option);
      $('#option1').html(responses[18].answer);
      $('#option2').html(responses[18].remark);
    } else{
      $('.game').hide();
      $('.death').show();
      $('.deathbox').html(responses[count].option),
      $('#doption1').html(responses[count].answer),
      $('#doption2').html(responses[count].remark)
    }
   });//option2

  //  $(function(){
  //     $('#jayz').easyModal();
  //  });
  //  $("#option1").click(function(){
  //    $('#jayz').trigger();
  // }); //Modal

  $('#reset').click(function(){
    count = 0
    $('.death').hide();
    $('.game').show();
    $('.textbox').html("Here you go. Clean slate.");
    $('#option1').html("Click here to start over again.");
    $('#option2').html("Don't click here.");

  });
});//documentreadyfunction
