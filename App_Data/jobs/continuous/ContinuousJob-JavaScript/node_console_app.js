var fs = require('fs');

function whileLoop() {
  console.log('In while loop, working');
  setTimeout(whileLoop, 1000);
}

whileLoop();
