
  // let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
  // let swimmers = animals.slice(0,3);
  // let crawlers = animals.slice(3);


  // // splice adds to the middle of the array
  // animals.splice(2,0, 'starfish');

  // animals.splice(0,2, 'SHARK', 'SALMON');


  //First number is the index, second number is the number of items to be deleted, third items will be added.

  // SORT

  let people = [ 'Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];

  people.sort();


// String sort
// Using Const with Arrays

// myEggs.push('purple');
// 3
// myEggs
// (3) ["brown", "brown", "purple"]

// myEggs[0] = 'green';
// "green"
// myEggs
// (3) ["green", "brown", "purple"]

// I can change the color of the array but I cannot reassign it because I'm using const


// Objects contain information in pairs 'key + value' pairs

// const fitBitData = {
//   totalSteps : 5000,
//   totalMiles : 211,
//   avgCalorieBurn : 5700,
//   workoutsThisWeek : '5 or 7',
//   avgGoodSleep : '7:13'
// };

// const palette = {
//   red : '#eb4d4b',
//   yellow : '#f9ca24',
//   blue : '#30336b'
// };

// const userReviews ={}

// userReviews['queenBee49'] = 4.0;
// userReviews.mrSmith78 = 3.5;
// userReviews['Keith'] = 5;
// userReviews['Keith'] += 5;
// userReviews.mrSmith78 +=2.5;
// userReviews['queenBee49']++;

// Different ways of updating using .notation, brackets and incrementing it by one using ++

// Nested Arrays and Objects

// const student = {
//   firstName : 'Keith',
//   lastName : 'Musig',
//   strengths : [ 'creative', 'music', 'design'],
//   exams : {
//     midterms : 92,
//     final : 95
//   }
// };

// const avg = (student.exams.midterms + student.exams.final) / 2;

// const user = {
//   userName : 'Georgia',
//   type : 'cat'

// };

// for (let i = 1; i <= 10; i++) {
//   console.log('Peaches', i);
// }

// for (let num = 1; num <= 20; num++) {
//   console.log(`${num} x ${num} = ${num * num}`);
// }

// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }
// console.log('FINE!');


// for Loop examples

// const examScores = [ 98, 77, 84, 91, 57, 66 ];

// for (let i = 0; i < examScores.length; i++) {
//   console.log(i, examScores[i]);
// }

// const myCats = [
//   {
//     firstName: 'Miles',
//     age: 4
//   },
//   {
//     firstName: 'Fred',
//     age: 19
//   },
//   {
//     firstName: 'Mingus',
//     age: 2
//   }

// ];

// for (let i = 0; i < myCats.length; i++) {
//   let cats = myCats[i];
//   console.log (`${cats.firstName} lived ${cats.age}` + ' years.');
  
// }


// reverse loop

// const word = 'stressed';
// let reversedWord = '';
// for (let i = word.length -1; i >= 0; i--) {
//   reversedWord += word[i];
//   // console.log(word[i]);
// }
// console.log(reversedWord);

// Nested loops
// for (let i = 1; i <=10; i++) {
//   console.log('OUTER CATS:', i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log('INNER CATS', j);
//   } 
// }

// GameBoard



// 'i' loops through the 4 lines of the array.
// 'j' loops through the numbers of each line.

// While loops
// In the loop, update the attempt to make the condition false

// Example has 'break'

// const gameBoard = [
//   [ 4, 32, 8, 4 ],
//   [ 64, 8, 32, 2 ],
//   [ 8, 22, 16, 4 ],
//   [ 2, 8, 4, 2 ]
// ];

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     totalScore =+ row[j];
//   }
// }


// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (true) {
//   if (target === guess) break;
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`congrats I win!!`);


// Example of For of loop:

// let subSomethings = [ 'cat', 'guitars', 'girl friend', 'running'];

// // for (let i = 0; i < subSomethings.length; i++) {
// //   console.log(subSomethings[i]);
// // } 
// // this works the same as the for loop above.
// for (let sub of subSomethings) {
//   console.log(sub);
// }

// for (let char of 'yabbadabbadoo') {
//   console.log(char.toUpperCase());
// }

// let char, num, element, letter



// const words1 = [ 'mail', 'milk', 'bath', 'black' ];
// const words2 = [ 'box', 'shake', 'tub', 'berry'];

// for (let i = 0; i < words1.length; i++) {
//   console.log(`${words1[i]}${words2[i]}`);
// }





const magicSquare = [
  [ 2, 7, 6 ],
  [ 9, 5, 1 ],
  [ 4, 3, 8 ]
];

// for(let i = 0; i < magicSquare.length; i++){
//   let row = magicSquare[i];
//   let sum = 0;
//   for(let j = 0; j < row.length; j++){
//     console.log[j];
//     sum += row[j];
//   }
//   console.log(`${row} summed to ${sum}`);

  // Same using for of

  // for (let row of magicSquare) {
  //   let sum = 0;
  //   for (let num of row) {
  //     sum =+ num;
    
  //   }
  //   console.log (`${row} summed to ${sum}`);
  // }

  // Iterating over objects:

  // const movieReviews = {
  //   'Close Encounters' : 8,
  //   'Throw Mama from the Train' : 8,
  //   fargo : 10,
  //   'Ballad of Buster Scruggs' : 8,
  //   Superbad : 10,
  //   'Pale Rider' : 9,
  //   'Toy Story' : 7,
  //   'Rise of Skywalker' : 6,
  //   'Blade Runner' : 9.5
  // };
  // Object.keys(movieReviews)
  // Object.values(movieReviews)
  // this is an object. Objects are not iterable.
  // Looping over keys and values
  // Object.keys will give us a list. Object.values will give us values
  // NOTE: the O in Object needs to be capitalized.
  // If you want to access part of an object, use [] square brackets.

  // for (let movie of Object.keys(movieReviews)) {
  //   console.log(movie, movieReviews[movie])
  // }

  // const ratings = Object.values(movieReviews);
  // let total = 0;
  // for (let r of ratings) {
  //   total =+ r;

  // }
  // let avg = total / ratings.length;
  // console.log(avg);

  // for of loop will loop over values
  // For in loop will loop over keys

const gigEarnings = {
  spanishBallroom : 400,
  almaMater : 100,
  craft19 : 200,
  ZoomGig : 200
};

for(let prop in gigEarnings) {
  console.log(prop);
  console.log(gigEarnings[prop]);
}

let total = 0;
for(let prop in gigEarnings) {
  total += gigEarnings[prop];
}
console.log(`Keith Total Hypothetical Earnings: $${total}`);



// methods are functions

function gratitude() {
  console.log('I am great!');
  console.log('Thank You');
  console.log('I am attracting abundance');
}
gratitude();
gratitude();

for (let i =0; i < 13; i++) {
  gratitude();
}


// roll dice

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
  rollDie();
}
}

// Arguements


function square(num) {
  console.log(num * num);
}

function sum (x, y) {
  console.log(x + y);
}

function divide (x , y) {
  console.log(x / y);
}

function multiply (x, y) {
  console.log(x * y);
}

function timesAdd (x, y, z) {
  console.log(x * y + z);
}

const scream = 'I want to be sedated'.toUpperCase();


// Return statement stops a function

function isBlue(color) {
  if (color.toLowerCase() === 'blue') {
    return true;
  }
  else {
    return false;
  }
}

// same with less code:

// function isBlue (color) {
//   return color.toLowerCase() === 'blue';
  
// }

function containsCats(arr) {
  for (let color of arr) {
    if (color === 'lions' || color === 'tigers') {
      return true;
    }
  }
  return false;
}

// return challenges

// write a isValidPassword function
// it accepts 2 arguments: password and username
// password must:
// be at least 8 characters
// cannot contain spaces
// cannot contain username
// if all requirements are met, return true, otherwise false.

// function isValidPassword(password, username) {
//   if(password.length < 8 ){
//     return false;
//   }
//   if(password.indexOf(' ') !== -1) {
//     return false;    
//   }
//   if(password.indexOf(username) !== -1) {
//     return false;    
//   }
//     return true;
// }

// SAME BUT SIMPLIFIED

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(' ') !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;    
//   }
//     return true;
// }

// turn if statements into variables:

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(' ') !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (tooShort || tooSimilar || hasSpace) return false;    
//   return true;
// }





function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooShort && !tooSimilar && !hasSpace;    
  return true;
}




// Write a function to find the average value in an array of numbers
// avg(0,50) // 25
//avg([75, 76, 93, 100]) //83.2

function avg(arr) {
  let total = 0;
  // loop over each num
  for (let num of arr) {
  // add them together
  total += num;
}
// divide by number of nums
return total / arr.length;
}

function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    console.log(char);
    // if(lowerCased.indexOf(char) === -1) {
    if(!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
  function getCard() {
  const values = [
    'Ace', 'King', 'Queen', 'Jack', '10', '9', '8','7','6','5','4','3','2'];
    // const valIdx = Math.floor(Math.random() * values.length);
    // const value = values[valIdx];

    // const suits = ['clubs', 'hearts', 'diamonds', 'spades'];
    // const suitIdx = Math.floor(Math.random() * suits.length);
    // const suit = suits[suitIdx];
    // return {value: value, suit: suit};
    const value = pick(values);
    const suits = ['clubs', 'hearts', 'diamonds', 'spades'];
    const suit = pick(suits);
    return {value: value, suit: suit};
  }

  if (true) {
    let animal = 'cat';
    console.log(animal);
  }
  
  // var is scoped outside

  // let is blocked scoped

  // function expression , stored in a variable (function is an object)

function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}

const multiply = function (x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

const operations = [add, subtract, multiply, divide];

for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}
