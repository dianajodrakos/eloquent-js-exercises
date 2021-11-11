const { 
  generatePyramid, 
  fizzBuzz, 
  chessboard
} = require('../programStructure.js');

const log = jest.spyOn(console, 'log').mockImplementation();

describe('tests functions for Program Structure Exercises', () => {
  beforeEach(() => {
    log.mockClear();
  });
  afterAll(() => {
    log.mockRestore();
  });

  it('generatePyramid takes in a string and logs an ASCII pyramid of that string in the console.', () => {
    generatePyramid('#');
    expect(console.log).toBeCalledTimes(7);
    expect(console.log).toHaveBeenLastCalledWith('#######');
  });

  it('fizzBuzz takes in a number and logs out \'Fizz\' for numbers divisible by 3, \'Buzz\' for numbers divisible by 5, and \'FizzBuzz\' for numbers divisible by both 3 and 5.', () => {
    fizzBuzz(1);
    expect(console.log).toBeCalledTimes(15);
    expect(console.log).toHaveBeenLastCalledWith('FizzBuzz');
  });

  it('chessboard logs an ASCII chessboard to the console with a grid size of 8x8.', () => {
    chessboard();
    expect(console.log).toBeCalledTimes(8);
    expect(console.log).toHaveBeenLastCalledWith('# # # # ');
  });

});


