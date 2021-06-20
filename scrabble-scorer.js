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

const simplePointStructure = {
  1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

const vowelPointStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
  // console.log(word); //
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
  console.log(letterPoints); //
	return letterPoints;
 }

function simpleScrabbleScorer(anotherWord) {
  //anotherWord = "";
  anotherWord = anotherWord.toUpperCase();
  //console.log(anotherWord);
  let simpleLetterPoints = "";

  for (let j = 0; j < anotherWord.length; j++) {

    for (const pointValue in simplePointStructure) {

      if (simplePointStructure[pointValue].includes(anotherWord[j])) {
        simpleLetterPoints += `Points for '${anotherWord[j]}': ${pointValue}\n`
      }
    }
  }
  console.log(simpleLetterPoints); //
	return simpleLetterPoints;
 }

function vowelScrabbleScorer(vowelsInWord) {
  vowelsInWord = vowelsInWord.toUpperCase();
  // console.log(vowelsInWord);
  let vowelLetterPoints = "";

  for(let k = 0; k < vowelsInWord.length; k++) {

    for (const pointValue in vowelPointStructure) {

      if (vowelPointStructure[pointValue].includes(vowelsInWord[k])) {
        vowelLetterPoints += `Points for '${vowelsInWord[k]}': ${pointValue}\n`
      }
    }
  }
  console.log(vowelLetterPoints); //
	return vowelLetterPoints;  
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// A) Initial Prompt - 1. Modify the provided initialPrompt() function to prompt the user to enter a word to score.

function initialPrompt() {
   let word = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
   return oldScrabbleScorer(word);
//   return word;
}; 

// B.1. - Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.
function simpleScore() {
  //let anotherWord = initialPrompt(word);
  let anotherWord = input.question("Let's play some scrabble with a simple score system! Enter a word: ");
  return simpleScrabbleScorer(anotherWord);
}

// let simpleScore; -> ORIGINAL LINE IN CODE

// B.2. - Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
function vowelBonusScore() {
  let vowelsInWord = input.question("Let's play some scrabble with a bonus vowel score system! Enter a word: ");
  return vowelScrabbleScorer(vowelsInWord);
}
//let vowelBonusScore; -> ORIGINAL LINE IN CODE

function scrabbleScore() {
   let word = input.question("Let's play some Scrabble with the original scoring algorithm! Enter a word: ");
   return oldScrabbleScorer(word);
}; 

  initialPrompt();
//  simpleScore();
//  vowelBonusScore();
//  scrabbleScore();

// let scrabbleScore; -> ORIGINAL LINE IN CODE

// test between here
function scorerPrompt(yourChoice) {
  console.log("Which scoring algorithm would you like to use?\n\n0 - Simple:  One point per character\n1 - Vowel Bonus:  Vowels are worth 3 points\n2 - Scrabble:  Uses Scrabble point system\n");
  yourChoice = input.question("Please choose 0, 1 or 2: ");
  if (yourChoice == 0) {
    //console.log("Zero.");
    simpleScore();
  } else if (yourChoice == 1) {
    vowelBonusScore();
  } else if (yourChoice == 2); {
    initialPrompt(); // original Scrabble scorer
  }
return yourChoice;
};

console.log("Choose your poison.", scorerPrompt());
// test ending here

// Finish writing the scoringAlgorithms array. It should be populated with three objects, one for each of the three scoring options. Each object should contain three keys: name, description, and scorerFunction.
const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scorerFunction: simpleScrabbleScorer(),
}, 
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scorerFunction: vowelScrabbleScorer(),
},
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scorerFunction: oldScrabbleScorer(),
  }
];

 console.log("algorithm name: ", scoringAlgorithms[0].name);


// Finish writing scorerPrompt() so that the user can select which scoring algorithm to use when the program scores their word. Use the selected algorithm to determine the score for the word:
// If the user enters 0, have the program output a score using the simple scorer.
// If the user enters 1, use the vowel bonus scoring function.
// If the user enters 2, use the Scrabble scoring option.
// scorerPrompt() should return the object the user has selected.

/*
function scorerPrompt() {
  console.log("Let's play some Scrabble! ");
  console.log("/n");
  initialPrompt();
  let userChoices = input.question(Number("Enter 0, 1, or 2: ")); // change user input to Number type later
  if (userChoices === 0) {
    // Simple scoring
    //initialPrompt();
    // console.log(initialPrompt());
    console.log("algorithm name: ", scoringAlgorithms[0].name);
    console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction("JavaScript"));

  } else if (userChoices === 1) {
    // Bonus vowels scoring
    vowelBonusScore();
    console.log("algorithm name: ", scoringAlgorithms[1].name);
    console.log("scorerFunction result: ", scoringAlgorithms[1].scorerFunction("JavaScript"));

  } else (userChoices === 2); {
    // Scrabble
    simpleScore();
    console.log("algorithm name: ", scoringAlgorithms[2].name);
    console.log("scorerFunction result: ", scoringAlgorithms[2].scorerFunction("JavaScript"));
  } 
}

*/

function transform() {};

let newPointStructure;

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
