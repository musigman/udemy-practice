// function add(x, y) {
//   return x + y;
// }

// const subtract = function (x, y) {
//   return x - y;
// }

// const multiply = function (x, y) {
//   return x * y;
// }

// const divide = function (x, y) {
//   return x / y;
// }

// const operations = [add, subtract, multiply, divide];

// for (let func of operations) {
//   let result = func(30, 5);
//   console.log(result);
// }

// function callThreeTimes(f) {
//   f();
//   f();
//   f();
// }

// function laugh() {
//   console.log("la la la la");
// }

// function gratitude() {
//   console.log("I am gratefull for everything");
// }

// function repeatNTimes(action, num) {
//   for (let i = 0; i < num; i++) {
//     action(); 
//   }
// }
// repeatNTimes (gratitude, 13);


// HIGHER ORDER FUNCTIONS

function add(x, y) {
  return x + y;
}

function callThreeTimes(f) {
  f();
  f();
  f();
  f();
}

function jkay() {
  console.log("Got Canned Heat in My Feet tonight!");
}

function sammy() {
  console.log("I can't drive 55!");
}

function repeatNTimes(action, num) {
  for(let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(jkay, 7);

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

function makeBetweenFunc (x, y) {
  return function (num) {
    return num >= x && num <= y;
  }
}

const isChild = makeBetweenFunc(0, 18);

const isInNineties = makeBetweenFunc(1990, 2000);

// Callback functions: a function passed into another function as an argument, which is then invoked inside the outer function. Example:

function callTwice(cats) {
  cats();
  cats();
}

function laugh() {
  console.log ('hahahahaha!');
}

function cats() {
  console.log('meow!')
}

function georgia() {
  alert('I\'m Taking a nap!')
}

// setTimeout(georgia, 2000);

const btn = document.querySelector('button');
btn.addEventListener('click', georgia)

// Anonymous functions are used when you don't have to call that function again

// Hoisting moves lines using var. let will not be hoisted. function declarations are hoisted

// Callback functions

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
  console.log(num * 2);
})

const texts = ['dogs', 'cats', 'iguanas', 'fish'];
const caps = texts.map(function (t) {
  return t.toUpperCase();

})

const numbersTwo = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['gratitude', 'giving', 'acceptance', 'appreciation'];

const doubles = numbersTwo.map(function (num) {
  return num * 2;
});

const numDetail = numbers.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
})

// doing the same thing as numDetail:

const doubles2 = [];
for (let num of numbersTwo) {
  doubles2.push(num *2)
}

const abbrevs = words.map(function(word) {
  return word.toUpperCase().split().join('.');
})