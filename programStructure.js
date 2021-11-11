const generatePyramid = string => {
  while (string.length < 8) {
    console.log(string);
    string = string + '#';
  }
};

module.exports = { generatePyramid };
