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

const chessboard = () => {
  
}

module.exports = { 
  generatePyramid,
  fizzBuzz,
  chessboard
};
