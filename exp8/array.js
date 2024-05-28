const numbers = [1, 2, 3, 4, 5];

// Iterate over the array using a for loop
console.log('Using for loop:');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Iterate over the array using forEach method
console.log('\nUsing forEach method:');
numbers.forEach((number) => {
  console.log(number);
});

// Iterate over the array using for...of loop
console.log('\nUsing for...of loop:');
for (const number of numbers) {
  console.log(number);
}