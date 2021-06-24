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

function initialPrompt() {
   let word = input.question("Let's play some Scrabble! \n\nEnter a word to score: ");
   return word;
}; 

let userWord = initialPrompt(); 

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
    //scorerFunction: scrabbleScore(userWord),
    scorerFunction: oldScrabbleScorer(userWord),
  }
];

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

function simpleScore() {
  return simpleScrabbleScorer(userWord);
}

function vowelBonusScore() {
  return vowelScrabbleScorer(userWord);
}

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

const newPointStructure = transform(oldPointStructure);
/*
// OLD VERSION OF scrabbleScore()
function scrabbleScore() {
  return oldScrabbleScorer(userWord);
}; 
*/

// ANOTHER TEST OF scrabbleScore()
function scrabbleScore() {
  console.log(`Currently using : ${scoringAlgorithms[0].name}`);
	console.log(`The score for the word ${userWord} is ${oldScrabbleScorer(userWord).scoreTotal}`);
//  return scrabbleScore();
}
/*
// NEW VERSION
function scrabbleScore(word) {
//    function oldScrabbleScorer(word) {
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
//  console.log("algorithm name: ", scoringAlgorithms[2].name);
console.log("scorerFunction result: ", scoringAlgorithms[2].scorerFunction(word));
  console.log(`Total Points for '${word}': ${scoreTotal}`)    
	return letterPoints;
};
*/
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

//console.log("Pick your poison.", scorerPrompt());
console.log(`Currently using : ${scoringAlgorithms[0].name}`);
console.log(`The score for the word ${userWord} is ${scoringAlgorithms[0].scorerFunction}`);
// test ending here


function runProgram() {
  initialPrompt();
  let userWord = initialPrompt();
  scorerPrompt();
  //console.log(`Currently using : ${scoringAlgorithms[0].name}`);
	//console.log(`The score for the word ${userWord} is ${scoringAlgorithms[0].scoreFunction(userWord)}`);
//  runProgram();

}

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
