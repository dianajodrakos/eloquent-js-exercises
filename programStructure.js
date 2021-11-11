const generatePyramid = string => {
  while (string.length < 8) {
    console.log(string);
    string = string + '#';
  }
};

const fizzBuzz = () => {

};

module.exports = { 
  generatePyramid,
  fizzBuzz
};
