var readlineSync = require('readline-sync');
var answer = readlineSync.question('Do you like to read books? :');
console.log(answer);
var answer1 = readlineSync.question("Do you like fiction books?");
console.log(answer1);
var answer2 = readlineSync.question("Do you know who is the writer of harry potter?");
console.log(answer2);
var score = 0;
if (answer2 === "J.K.Rowling") {
  console.log("right");
  score = score + 1;
}
else {
  console.log("wrong");
  score = score - 1;
}
console.log("your score is " + score);

var answer3 = readlineSync.question("Do you like Romantic Books?");
console.log(answer3);
var answer4 = readlineSync.question("who was the writer of The Fault in our Stars?");
if (answer4 === "John Green") {
  console.log("right");
  score = score + 1;
}
else {
  console.log("wrong");
  score = score - 1;
}
console.log("your score is" + score);

var answer5 = readlineSync.question("Do you like phylosophy books?");
console.log(answer5);
var answer6 = readlineSync.question("Do you know who was the writer of The alchemist?");
if (answer6 === "Paulo Coelho") {
  console.log("right");
  score = score + 1;
}
else {
  console.log("wrong");
  score = score - 1;
}
console.log("your score is" + score);
console.log("YAY, your score is" + score);
console.log("highscores:");
var highScores = [{
  name: "Miten",
  score: 3,
}]

highScores.map(score => console.log(score.name, " : ", score.score))


