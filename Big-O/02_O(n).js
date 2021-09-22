// Single Item array
const nemo = ['nemo'];

// Multi-item array:
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

// Very large array:
const large = new Array(1000000).fill('nemo');

function findNemo(array){
    for(let i = 0; i < array.length; i++){ //O(n)
        if (array[i] === 'nemo') {  // O(n)
            console.log('Found Nemo!'); //O(n)
        }
    }
}

// findNemo function has Big-O of O(n) --> Linear Time
/* Big-O for
 nemo - O(1) - 1 element
 everyone - O(10) - 10 elements
 large - O(1000000) - 10000000 elements */


findNemo(nemo);
findNemo(everyone);
// findNemo(large);
