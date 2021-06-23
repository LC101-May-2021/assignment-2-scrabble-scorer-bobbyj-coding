// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
/*
function lowerTest(oldPointStructure) {
  let key = "";
  for(value of oldPointStructure[key]){
    value = value.toLowerCase();
  }
  console.log(oldPointStructure);
}

console.log(lowerTest(oldPointStructure));
*/

/*
let newPointStructure = transform(oldPointStructure);
*/

const simplePointStructure = {
  1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

const vowelPointStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
  let scoreTotal = 0;
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      scoreTotal = scoreTotal + Number(pointValue);      
		 }
 
	  }
	}
  console.log(letterPoints);
  console.log(`Total Points for '${word}': ${scoreTotal}`)    
	return letterPoints;
 }

/*
FIRST ATTEMPT at adding newPointStructure

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
  let scoreTotal = 0;
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in newPointStructure) {
 
		 if (newPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      scoreTotal = scoreTotal + Number(pointValue);      
		 }
 
	  }
	}
  console.log(letterPoints);
  console.log(`Total Points for '${word}': ${scoreTotal}`)    
	return letterPoints;
 }

*/
function simpleScrabbleScorer(anotherWord) {
  anotherWord = anotherWord.toUpperCase();
  let scoreTotal = 0;
  let simpleLetterPoints = "";

  for (let j = 0; j < anotherWord.length; j++) {

    for (const pointValue in simplePointStructure) {

      if (simplePointStructure[pointValue].includes(anotherWord[j])) {
        simpleLetterPoints += `Points for '${anotherWord[j]}': ${pointValue}\n`
        scoreTotal = scoreTotal + Number(pointValue);
      }
    }
  }
  console.log(simpleLetterPoints);
  console.log(`Total Points for '${anotherWord}': ${scoreTotal}`)  
	return simpleLetterPoints;
 }

function vowelScrabbleScorer(vowelsInWord) {
  vowelsInWord = vowelsInWord.toUpperCase();
  let vowelLetterPoints = "";
  let scoreTotal = 0;

  for(let k = 0; k < vowelsInWord.length; k++) {

    for (const pointValue in vowelPointStructure) {

      if (vowelPointStructure[pointValue].includes(vowelsInWord[k])) {
        vowelLetterPoints += `Points for '${vowelsInWord[k]}': ${pointValue}\n`
        scoreTotal = scoreTotal + Number(pointValue);
      }
    }
  }
  console.log(vowelLetterPoints);
  console.log(`Total Points for '${vowelsInWord}': ${scoreTotal}`)
	return vowelLetterPoints;  
}
// don't change the names or your program won't work as expected. //

// A) Initial Prompt - 1. Modify the provided initialPrompt() function to prompt the user to enter a word to score.

function initialPrompt() {
   let word = input.question("Let's play some Scrabble! \n\nEnter a word to score: ");
   return word;
}; 

let userWord = initialPrompt();

// B.1. - Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.
function simpleScore() {
  return simpleScrabbleScorer(userWord);
}
// let simpleScore; -> ORIGINAL LINE IN CODE

// B.2. - Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
function vowelBonusScore() {
  return vowelScrabbleScorer(userWord);
}
//let vowelBonusScore; -> ORIGINAL LINE IN CODE


function scrabbleScore() {
  return oldScrabbleScorer(userWord);
}; 

/* WORKING MODEL FROM EARLY EXERCISES
// new attempt for scrabbleScore() rewrite

function scrabbleScore() {
  return newPointStructure(userWord);
}

// let scrabbleScore; -> ORIGINAL LINE IN CODE
*/

// test between here
function scorerPrompt(yourChoice) {
  console.log("Which scoring algorithm would you like to use?\n\n0 - Simple:  One point per character\n1 - Vowel Bonus:  Vowels are worth 3 points\n2 - Scrabble:  Uses Scrabble point system\n");
  yourChoice = input.question("Please choose 0, 1 or 2: ");
  yourChoice = (Number(yourChoice));
  if (yourChoice === 0) {
    simpleScore();
    console.log("\n");
    return yourChoice;
  } else if (yourChoice === 1) {
    vowelBonusScore();
    console.log("\n");
    return yourChoice;
  } else if (yourChoice === 2); {
    scrabbleScore();
    console.log("\n");
    return yourChoice; 
  } //else {
    //return initialPrompt();
 // } 
    //console.log("Please try again.\n");
    //initialPrompt(); 
  //}  //(yourChoice !== 0 && yourChoice !== 1 && yourChoice !== 2); {
    //console.log("Please try again.\n");
    //initialPrompt(); 
};

console.log("Pick your poison.", scorerPrompt());
// test ending here

// Finish writing the scoringAlgorithms array. It should be populated with three objects, one for each of the three scoring options. Each object should contain three keys: name, description, and scorerFunction.
const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scorerFunction: simpleScrabbleScorer(userWord),
}, 
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scorerFunction: vowelScrabbleScorer(userWord),
},
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    //scorerFunction: newPointStructure(userWord),
    scorerFunction: oldScrabbleScorer(userWord),
  }
];

//console.log("algorithm name: ", scoringAlgorithms[0].name);

// C. 1. Write the rest of the transform() function. It will need to take an object as a parameter - specifically the oldPointStructure object. Calling transform(oldPointStructure) will return an object with lowercase letters as keys. The value for each key will be the points assigned to that letter.
function transform(oldScoringObject) {
  let newlySwappedKeyValue = {};
  let lowerCaseKey = "";
  for(let eachScorePair in oldScoringObject){
    for(let i=0; i < oldScoringObject[eachScorePair].length; i++) {
      newlySwappedKeyValue[(oldScoringObject[eachScorePair][i]).toLowerCase()] = eachScorePair;
    }
  }
  return (newlySwappedKeyValue);
};

// C. 2. Locate the newPointStructure object in the starter code and set it equal to transform(oldPointStructure).

let newPointStructure = transform(oldPointStructure);
console.log(newPointStructure);
/*
console.log(Object.keys(newPointStructure));

let newKeyCapitals = Object.keys(newPointStructure);

for (let i = 0; i < Object.keys(newPointStructure).length; i++) {
   let newKeyLower = "";
   newKeyLower = newKeyLower[i];
   newKeyLower.toLowerCase();
   console.log(newKeyLower);
}

//for (value of Object.keys(newPointStructure)) {
//  value = value.toLowerCase();
//}

console.log(newPointStructure);
// let newPointStructure; <- ORIGINAL LINE IN CODE

// transform(oldPointStructure);
*/

/*
function runProgram() {
//  scorerPrompt();
  initialPrompt();
  simpleScore();
  vowelBonusScore();
}
*/

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
