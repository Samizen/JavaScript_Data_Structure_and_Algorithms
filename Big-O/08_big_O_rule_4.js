function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:'); // O(n)
    numbers.forEach(function(number) {
      console.log(number);
    });
  
    console.log('and these are their sums:'); // O(n^2)
    numbers.forEach(function(firstNumber) {
      numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
  }

// O(n^2)
  
  printAllNumbersThenAllPairSums([1,2,3,4,5])