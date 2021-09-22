const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array){
    for(let i = 0; i < array.length; i++){ //O(n)
        if (array[i] === 'nemo') {  // O(n)
            console.log('Found Nemo!'); //O(n)
        }
    }
}

// Big-O --> O(n)

// Better Alternative to make this algorithm more effiecient would be:

function findNemoBreak(array){
    for(let i = 0; i < array.length; i++){ //O(n)
        if (array[i] === 'nemo') {  // O(n)
            console.log('Found Nemo!'); //O(n)
            break;
        }
    }
}
// Inserting a break will make this loop run only 4 times in our case

// But in Big-O, the worst case scenario is considered. The worst case here is that 'nemo' is the last member of the array. 
// This will mean that Big-O is still O(n).

findNemo(everyone);
findNemoBreak(everyone);