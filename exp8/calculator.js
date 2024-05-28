const operations = [
    { name: 'add', symbol: '+' },
    { name: 'subtract', symbol: '-' },
    { name: 'multiply', symbol: '*' },
    { name: 'divide', symbol: '/' }
  ];
  
  const num1 = 10;
  const num2 = 5;
  operations.forEach((operation) => {
    let result;
    switch (operation.name) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operation';
    }
    console.log(`${num1} ${operation.symbol} ${num2} = ${result}`);
  });
  