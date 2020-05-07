// Name: Fatih Erik
// Class: 27

// JavaScript1

/* 1. Create a function, named logObj, that:
    - Takes 1 argument: an object, with 3 properties
    - Loops over the object and put each value into a separate variable
    - Concatenates the values into a single string
    - Log to the console the string, including the following: '{NAME} is {AGE} and works as an {JOB}!'
    - Return the string

    Expected output:
    'Noer is 28 and works as an Education Director'
*/
const newObj = {
    name: "Noer",
    age: 28,
    job: "Education Director"
  }
  
  const logObj = (obj) => {
       
    let result = [];
  
    for (const property in obj) {
  
      result.push(obj[property])
    }
    console.log(result[0] + " is" +" "+ result[1] +" "+ "and works" + " " + "as an" + " "+ result[2]);
  };
  
  logObj(newObj);
 

/* 2. Create a function, named logNumbers, that:
      - Takes 2 arguments: a start number and an end number
      - Has a loop that starts from the start number and ends until the end number
      - Log to the console each number, however...
      - If the number is a multiple of 3 output the string “Fizz”,
      - If the number is a multiple of 5 output the string “Buzz”
      - If the number is a multiple of 3 AND 5 output the string “FizzBuzz”
      - Make use of the modulo operator and check for the remainder: %

      Expected output:
      logNumbers(1, 15);
      1
      2
      Fizz
      4
      Buzz
      6
      ...
      13
      14
      FizzBuzz

      Use the following values: 1 (start number) and 100 (end number)
*/
function fizzBuzz(startNumber,endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {

       if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
       } else if (i % 5 === 0) {
        console.log('Buzz');
      } else if (i % 3 == 0) {
        console.log('Fizz');
       } else {
        console.log(i);
      }
     }  
  }
  console.log(fizzBuzz(1,100));

// JavaScript2

/* 3. Create a function, named toNumbers, that:
      - Takes in 1 argument: an array of strings
      - Get the index position number of each value
      - Create a new array that includes all these numbers 
      - Make use of the map() function
      - Log to the console the array of numbers
      - Return the array of numbers

      Expected output:
      [1, 2, 3, 4]

      Use the following array: const letters = ['a', 'b', 'c', 'd'];
*/

const toNumbers = (arg) => {
    let result = arg.map(el => arg.indexOf(el));
    console.log(result);
    return result;
  }
  
  toNumbers(['a', 'b', 'c', 'd']);

/* 4. Create a function, called injectBooksToDOM, that:
      - Takes 1 argument: an array of objects
      - Loops over the array
      - Injects each object's content into the DOM in an unordered list
      - Make use of the forEach() function
      - Returns true if it works, false if it doesn't
  
      Target the '#root' element in 'index.html'.
      Use the following object: 
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:
                        "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
            }
      ];
*/

function injectBooksToDOM(arr) {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
  
    arr.forEach(element => {
      const li = document.createElement('li');
      li.innerText = element;
      ul.appendChild(li);
    });

    return ul;
    }
    
  }
  const books = [
    {
          bookName: "The Nature of Software Development",
          author: "Ron Jeffries",
          coverURL:
                "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
    },
    {
          bookName: "Clean Code",
          author: "Robert Cecil Martin",
          coverURL:
                "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
    }
]
    let ulElement = injectBooksToDOM(books);

    document.querySelector('#root').appendChild(ulElement);


/*
5. What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in? 
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us, 
the explanation why is the important part)

function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() {
            console.log('five');
        }, 1000);
    }, 0);
    console.log('six');
}
test(); // ?
*/