

const chalk = require('chalk');



var user = require("readline-sync");
var userName = user.question("What's your name? ");
console.log("Welcome "+ userName + " to Do You Know Pokemon? ");
console.log("In this game thre are 2 levels you need to cross first level to get into the second level");

var questionOne = {
  question:"What is the first Pokémon in the Pokédex?" ,
  options:["Bulbasaur","Venusaur","Mew"],
  answer:"Bulbasaur"
}

var questionTwo = {
  question:"Who are the starter Pokémon from the Kanto region?" ,
  options: ["Bulbasaur, Pikachu & Cyndaquil","Charmander, Squirtle & Bulbasaur","Charmander, Pikachu & Chikorita"],
  answer:"Charmander, Squirtle & Bulbasaur"
}

var questionThree = {
  question:"How old is Ash?" ,
  options: [9,10,12],
  answer:10
}

var questionFour = {
  question:"Who are the starter Pokémon from the Johto region?",
  options:["Chikorita, Cyndaquil & Totadile","Totodile, Pikachu & Bayleef","Meganium, Typhlosion & Feraligatr"],
  answer:"Chikorita, Cyndaquil & Totadile"
}

var questionFive = {
  question:"What Pokémon type is Pikachu?",
  options:["Mouse","Fire","Electric"],
  answer:"Electric"
}

var questionSix = {
  question:"What is Ash’s last name?",
  options:["Ketchup","Ketchum","Kanto"],
  answer:"Ketchum"
}

var questionSeven = {
  question:"Who is Ash’s starter Pokémon?",
  options:["Jigglypuff","Charizard","Pikachu"],
  answer:"Pikachu"
}

var questionEight = {
  question:"What is Pokémon short for?",
  options:["It’s not short for anything","Pocket Monsters","Monsters to catch in Pokéballs"],
  answer:"Pocket Monsters"
}

var questionNine = {
  question:"Which Pokémon has the most evolutions?",
  options:["Eevee","Slowbro","Tyrogue"],
  answer:"Eevee"
}

var questionTen = {
question:"Who are in Team Rocket?",
options:["Jessie, James & Pikachu","Jessie, James & Meowth","Jessie, James & Ash"],
answer:"Jessie, James & Meowth"
}


var levelOne = [questionOne,questionTwo,questionThree,questionFour,questionFive]

var levelSecond = [questionSix,questionSeven,questionEight,questionNine,questionTen]

var levelOneScore = 0;
var levelSecondScore = 0;
/*
index = user.keyInSelect(questionTwo.options,questionTwo.question," No option");
console.log(questionTwo.options[index] + ' is enabled.');
*/

function secondLevel(qustions,options,answer){
  console.log();
  console.log(qustions);
  indexs = user.keyInSelect(options);
  if(options[indexs] === answer){
    console.log(chalk.green("Your answer is correct "));
    levelSecondScore+=1;
    console.log(chalk.yellow("Your current score is " +levelSecondScore));
  }
  else{
    console.log(chalk.red("Your answer is wrong "));
    console.log(chalk.yellow("Your current score is "+levelSecondScore));
  }
}


for(i=0;i<levelOne.length;i++){
  var k = levelOne[i];
  console.log();
  console.log(k.question);
  indexs = user.keyInSelect(k.options);
  if(k.options[indexs] === k.answer){
    console.log(chalk.green("Your answer is correct "));
    levelOneScore+=1;
    console.log(chalk.yellow("Your current score is " +levelOneScore));
  }
  else{
    console.log(chalk.red("Your answer is wrong "));
    
    console.log(chalk.yellow("Your current score is " +levelOneScore));
  }
 

}

console.log("Yayyy!! Your have scored " +levelOneScore +" in levelOne");



if(levelOneScore>=4){
console.log("Yayyy you have crossed levelOne");
console.log()
console.log(chalk.magenta("Welcome to the level2 of the quiz game"));

for(i=0;i<levelSecond.length;i++){
 var current = levelSecond[i];
 secondLevel(current.question,current.options,current.answer);
}

}
else{
console.log(chalk.red("You need to score 4 or more to get into second level"));
}

//console.log("You have scored "+levelSecondScore+" in level2");
var finalScore = levelOneScore+levelSecondScore;
console.log(chalk.cyan("Yayy!! Your total score is " +finalScore));

var highscores = [{
  name:"Aditi",
  score:9
},{
  name:"avinash",
  score:7
}]
console.log()
console.log("Check out the high scores, if you should be there ping me. I'll update it");
  console.log()

  for(i=0;i<highscores.length;i++){
    console.log(highscores[i].name)
    console.log(highscores[i].score)
    console.log();
  }