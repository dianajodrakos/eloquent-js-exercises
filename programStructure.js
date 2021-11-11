const generatePyramid = string => {
  while (string.length < 8) {
    console.log(string);
    string = string + '#';
  }
};

const fizzBuzz = (n) => {
  n = +n;
  for (let i = 0; i < 15; i++) {
    if (n % 5 && !(n % 3)) {
      console.log('Fizz');
    } else if (n % 3 && !(n % 5)) {
      console.log('Buzz');
    } else if (!(n % 5) && !(n % 3)) {
      console.log('FizzBuzz');
    } else {
      console.log(n);
    }
    n++;
  }
};

const chessboard = (n) => {
//takes in a number 8
//should create a string that's a grid of 8x8 and log it to the console

//odd squares are ' '
//even squares are '#'

//odd rows and columns also start with ' '
//even rows and columns also start with '#'

//the easy way to do this would be to use a loop and add to the string on each loop, but processing time might be slow for very large numbers

//can we use math stuff to expedite this process?

//let's start with a loop
let board = '';
let oddRow = '';
let evenRow = '';
const oddSquare = ' ';
const evenSquare = '#';

  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      oddRow = oddRow + oddSquare;
    } else {
      oddRow = oddRow + evenSquare;
    }
  }

  if (n % 2) {
    evenRow = oddRow.slice(1, n).concat(evenSquare);
  } else {
    evenRow = oddRow.slice(1, n).concat(oddSquare);
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      board = board + oddRow;
    } else {
      board = board + evenRow;
    }
    if (i < n) {
      board = board + '\n';
    }
  }

  console.log(board);
};

module.exports = { 
  generatePyramid,
  fizzBuzz,
  chessboard
};
