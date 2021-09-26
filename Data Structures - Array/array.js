// Creation:
const strings = ['a', 'b', 'c', 'd'];
// In a 32 bit system, 4*4 = 16 bytes of memory

// Access:
strings[2];

// Operations:

// push - add something to the end of the array
strings.push('e'); // O(1)
console.log(strings); 

// pop - remove the last item of the array
strings.pop();  // O(1)
console.log(strings); 

// unshift - add item to the begining:
strings.unshift('z'); // O(n) because the index has to be shifted, which requires a loop to iterate through the previously saved index
console.log(strings); 

// splice() - to add things to the middle of the array
strings.splice(2, 0, 'f'); // O(n)
console.log(strings); 

// Types: Static and Dynamic Arrays
