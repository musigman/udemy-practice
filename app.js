// if (1 ==1) {
//   console.log("10-4 Buddy Holly");
// }

// else example

// let highScore = 1500;
// let userScore = 1650;

// if (userScore >= highScore) {
//   console.log(`Congrats, you have the new high score!`);
//   highScore = userScore;
// }
// else {
//   console.log(
//   `Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`
//   );
// }



//Nesting Conditionals

// let password = 'Dolly';

// if(password.length >= 6){
//   if(password.indexOf(' ') === -1) {
//     console.log("valid Password")
//   }
//   else {
//     console.log("Password is long enough but cannot contain spaces.");
//   }
// }
// else {
//   console.log("Password must be longer.");
// }


// Truthy and Falsy Values

// let loggedInUser = 'keith123';

// if (loggedInUser) {
//   console.log ('You are logged In');

// }
// else {
//   console.log('Please log in.')
// }


// Logical AND (&&)

// let password = "Chicken Meow";

// if(password.length >= 8 && password.indexOf(' ') === -1){
//   console.log('Valid Password');

// }
// else {
//   console.log('Invalid Password');
// }


// let num = 10;

// if (num >= 1 && num <= 10) {
//   console.log('Number is between 1 and 10');
// }
// else {
//   console.log('Please guess a number between 1 and 10');
// }


// Logical OR ||

// let age = 13;

// if(age < 6 || age >= 65){
//   console.log('You get in for free!');
// }
// else {
//   console.log('You have to pay $10');
// }


// let color = 'lilac';
// if (color === 'purple' || color === 'lilac' || color === 'violet') {
//   console.log('You are cool!');
// }
// else {
//   console.log('You are not so cool...');
// }

// Not operators
// ! means not
// !null is true
// ! (0 === 0) is false
// !(3 <= 4) is false



// let flavor = 'cherry';

// if 
// (flavor !== 'grape' && flavor !== 'cherry') {
//   console.log('We don\'t have that flavor');
// }
// else {
//   console.log('you have excellent taste!');
// }

// Not "!" Operates on a single expression



// let loggedInUser = '';

// if (!loggedInUser) {
//   console.log('You must log in');
// }


// Order precedence: ()  !   &&  ||
// && takes precedence over ||




// Switch statement

// let day = 3;

// switch (day) {
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   default:
//   console.log('Invalid day');
// }

// Ternary operator
// condition ? expIfTrue : expIfFalse
// ? if / : else

// let num = 4;

// // if (num === 7) {
// //   console log('Yes!');
// // }
// // else {
// //   console.log ('Nope!');
// // }

// num === 7 ? console.log('Yes!') : console.log('Nope!');

// let status = 'online';

// let color = status === 'online' ? 'green' : 'red';



// Arrays

// let groceryList = ['fish', 'cereal', 'ginger ale'];

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// colors[6]; will be violet


// shoppingList[1] = 'whole milk'; (this will replace an item in an array based on the index)
// shoppingList[2] = 'ice cream';

// shoppingList[shoppingList.length] = 'rice dream'; will add to the end of the List.

// Modifying: front/push, pop; end/shift, unshift

// let topSongs = [
//   'model man',
//   'dynamite',
//   'chicago',
//   'road games'];

//   // topSongs.push('AllRight');
//   // topSongs.pop(); removes the last item of an Array.

//   topSongs.shift('model man');


  // building an array using unshift. Will add items to the beginning
  // dirtyDishes.unshift('bowls');
  // removing the first item from an array using shift
  // dirtyDishes.shift();

  // .includes is a true or false.

  // if (ingredients.includes('flour')) {
  //   console.log('I am gluten free, I can't eat that!');
  // }


  // .join converts an array to a string
  // .reverse will reverse the array












