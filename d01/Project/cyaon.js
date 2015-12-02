function choice(choice, valid){
  this.choice = choice;
  this.valid = valid;
};

function answers(option, answer, remark){
  this.option = option;
  this.answer = answer;
  this.remark = remark;
};

var validity = function(choice){
     if (!choice["valid"]){
      console.log('you dead')
     } // 0 false, 1 true
};

var rchoices = [
  new choice("Run",1),
  new choice("Let's go see Jay, I want to see my friend",1),
  new choice("Talk to Jay",1),
  new choice("You can keep running, but you can't stay with Jay anymore.",1),
  new choice("Music has always been your refuge, to the studio we go!",1),
  new choice("Are you ready to answer?",1),
  new choice("Does it really matter if you are?",1),
  new choice("We da best",1),
  new choice("No...",1),
  new choice("You can tuna piano, but you can't piano a tuna",1),
  new choice("Quench your thirst",1),
  new choice("Here's a chance to go back and quench your thirst...",1),
  new choice("Do you go to the free salad bar?",1),
  new choice("Chopped black olives",1),
  new choice("Just talk to him, he's not that bad...",1),
  new choice("Accept, if you're not a loser.",1),
  new choice("Grill the meat",1),
  new choice("Serve as is",1),
// new choice(,0),
]

var wchoices = [
  new choice ("Talk",0),
  new choice ("Let's go to Chicago, I want to go home.",0),
  new choice ("Play with Blue Ivy",0),
  new choice ("Should you come clean to Kim?",0),
  new choice ("There's a showing of your indie film, Runaway, showing at a nearby theater, and you've been meaning to watch it.",0),
  new choice ("You da best.",0),
  new choice ("What?",0),
  new choice ("Wait what about the glue...?",0),
  new choice ("Feed your hunger",0),
  new choice ("Or pay $5.00 for a 2oz drink?",0),
  new choice ("Beets",0),
  new choice ("Do you ignore him? You're such a jerk.",0),
  new choice ("Accept...ing defeat",0),
  new choice ("Chop the vegetables",0),
  new choice ("Toast the buns",0),
]
var responses = [
  new answers("You really want to talk to Kim after you cheated on her? You're a brave man.","Should just stick with programming.","Leave saving lives for the professionals."),
  new answers("The plane actually forgot to refuel before it took off. Yeah. You died.","It's actually kind of eerie how it happened.","Because you landed in Lake Erie. Hah."),
  new answers("Freak accident. Blue Ivy choked Kanye to death with a slinky.","Why didn't Kanye fight back?","He wanted to be Blue Ivy's pacifier."),
  new answers("Didn't you learn the first time? Talking to Kim won't solve anything.","Simple moral to this story:","Run away from all your problems."),
  new answers("There's another person in the theater, the world renowned Illuminati Hunter: Smush Parker.","Yup, he was trying to hunt down Kobe Bryant while he was on the Lakers.","His goal was to catch Jay-Z today, but you'll do I guess."),
  new answers("You ain't smwort enough for DJ Khaled.","Anotha one bites the dust.","You a genius!"),
  new answers("You needa work on yourself.","It really isn't your day.","It REALLY isn't your day."),
  new answers("The gold flake is actually an extremely poisonous genus of fungi. You suffocate almost immediately upon it touching your tastebuds.","I gave you the choice to quench your thirst...","Sigh..."),
  new answers("Someone likes their nutrients. Too bad Dr. Dre was waiting to hit you with a lawsuit for copyright infringement.","Bears, Beets.","Battlestar Galactica"),
  new answers("Imbecile! The judges are all on the Atkins diet, and deathly afraid of ingesting anytype of carbohydrates.","These buns are from your local grocer aren't they? Generic store brand. Ugh.","The esteemed judges only eat organic, farm-to-table, gluten-free products. Do your research next time."),
  new answers("Looks like you died.","These can't all be sassy.","But really this one wasn't that hard."),
  new answers("Neptune smites you on the spot.","You're a real jerk you know that?","Try being nice one time, maybe you'll like it. Jerk."),
  new answers("Who chops the vegetables first? What are you some kind of culinary prodigy?","That'll show you.","You were doomed the second you started this dumb game."),
  new answers("You....You're incredible! Your skill as a chef has no peer. We are truly humbled being able to eat a hamburger so divine. We have no choice but to annoint you as head chef of Animal LA, and Son of a Gun.","You've really done it!","Although SpongeBob is off to the side crying..."),
  new answers("Your ascendance to the top of the culinary world has brought you massive acclaim, and even greater influence than you previously held as a figurehead of rap and fashion culture. With this influence, you are able to withstand Kim Kardashian's revenge plots, and you happily move to England with your new Bae, Susan Boyle.","Congratulations, I guess.","What more do you want? You've won the game already. Go outside and do something."),
]




$(document).ready(function(){
  var count = 0

  $("#startbutton").click(function(){
    $(".start").hide();
    $(".game").show();


  })
})
