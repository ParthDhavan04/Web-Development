const readline = require('readline');

// Create an interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to replace two or more 'a's with 'b'
function replaceAsWithB(inputString) {
  const regex = /aa+/g;
  const result = inputString.replace(regex, 'b');
  return result;
}

// Read input from the user
rl.question('Enter a string: ', (inputString) => {
  // Call the function to replace 'a's with 'b'
  const replacedString = replaceAsWithB(inputString);
  console.log('Modified string:', replacedString);
  rl.close();
});
