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

// const titles = books.map(function (t) {
  //   return a.title;
  
  // const authors = books.map(function (a) {
  //   return a.author;
  // });
  
  
  // const authors = author.map(function (a) {
    //   return a.author;
    // })
    
    
    // Arrow functions not supported in IE
    
    const square = (x) => {
      return x * x;
    }
    
    // remember to refresh browser window so code will run!!!
    
    const isEven = (even) => {
      return even % 2 === 0;
    }
    
    const multiply = (x,y) => {
      return x * y;
    }
    
    // Can leave perans off if there is only one parameter: x vs two parameters (x,y)
    
    // If no parameters, use empty () params.
    
    // Implicit return: you don't have to write the return.
    
    // const squared = n => {
      //   return n * n;
      // }
      
      // Is the same as
      
      // const squared = n => (
        //   n * n
        // )
        
        // same as:
        
        const squared = n => n * n;
        
        
        const nums = [1,2,3,4,5,6,7,8];
        
        const doubles1 = nums.map(function (n) {
          return n * 2;
        })
        // const doubles2 = nums.map(n =>
        //   return n * 2;
        // })
        
        const doubles3 = nums.map(n => n * 2);
        
        const paritylist = nums.map ((n) => (
          n % 2 === 0 ? 'even' : 'odd'
          ));
          
          // tertiary
          
          let movies = [
            "Close Encounters of the Third Kind",
            "Being There",
            "Waiting for Guffman",
            "Napoleon Dynamite",
            "Rubin and Ed"
          ]
          
          const movie = movies.find(movie => {
            return movie.includes('for');
          })
          
          const movie2 = movies.find(m => (
            m.indexOf("Close") === 0
            ))
            
            const books = [{
              title: 'Life of Pi',
              author: 'Yan Martel',
              rating: '5',
              genres: 'fiction'
            },
            { title: 'Illusions',
              author: 'Richard Bach',
              rating: '3',
              genres: 'fiction'
            },
            { title: 'A New Earth',
              author: 'Eckhart Tolle',
              rating: '5',
              genres: 'self help'
            }
            
            ]
            // const worthReading = books.find(b.author >= 3)
            //   return
            
            // const yanBook = books.find(y => (
            //   b.author.includes('Yan Martel') === 0
            // ))
            

            // Filter

            const nums2 = [34, 35, 67, 54, 109, 102, 32, 9 ];

            const odds = nums2.filter(n => n % 2 === 1)
            const evens = nums2.filter(n => n % 2 === 0)

            const goodBooks = books.filter(b => b.rating >= 3)

            const fictionBooks = books.filter(book => (
              book.genres.includes('fiction')
            ))

            const words2 = ['dog', 'dig', 'cat', 'pig', 'got'];

            const all3lets = words2.every(word => word.length ===3);
            const allEndInG = words2.every(word => {
              const last = word.length - 1;
              return word[last] === 'g'
            })

            const startWithP = words2.some(word => word[0] === 'p');

            const hasAnO = words2.some(word => word[1] === 'o');

            const allGoodBooks = books.every(book => books.rating > 2.5);


            const prices = [400.4, 50.2, 99.9, 34.9, 12.0];


            const badSort = prices.slice().sort();
            

            const grades =[87, 88, 32, 78, 99, 73, 70, 201];

            const maxGrade = grades.reduce((max, currVal) => {
              if(currVal > max) return currVal;
              return max;
            });
            const minGrade = grades.reduce((min, currVal) => (
              Math.min(min, currVal)
            ));

            const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
              return sum + currVal;
            }, 1000);