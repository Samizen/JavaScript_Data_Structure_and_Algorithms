function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); // O(1)
    var index = 0; // O(1)

    while (index < middleIndex) { // O(n/2)
        console.log(items[index]); 
        index++;
    }

    for (var i = 0; i < 100; i++) { // O(n)
        console.log('hi');
    }
}

// Big-O = O(1+1+1+1.5n) = O(3+1.5n) = O(n)