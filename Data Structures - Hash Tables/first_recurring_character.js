const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array1 = ['a', 'b', 'c', 'h', 'c'];
const array2 = [];



// Brute Force Method (Using Arrays)
function firstRecurringCharacter(array) {
    let breakSecondLoop = false;

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                breakSecondLoop = true;
                return array[i];
            }
            if(breakSecondLoop === true) {break}
        }
    }
}

// const result = firstRecurringCharacter(array);
// console.log(result); 

function firstRecurringCharacter2(array) {
    let hash = {};
    for(let i = 0; i < array.length; i++) {
        if(hash[array[i]] != undefined) {
            return array[i];
        } else {
            hash[array[i]] = i;
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter2(array));
console.log(firstRecurringCharacter2(array1));
console.log(firstRecurringCharacter2(array2));