const generatePyramid = string => {
  while (string.length < 8) {
    console.log(string);
    string = string + '#';
  }
};

const fizzBuzz = (n) => {
  n = +n;
  for (let i = 0; i < 15; i++) {
    if (n % 3 && !(n % 5)) {
      console.log('Fizz');
    } else if (n % 5 && !(n % 3)) {
      console.log('Buzz');
    } else {
      console.log(n);
    }
    n++;
  }
};

module.exports = { 
  generatePyramid,
  fizzBuzz
};
