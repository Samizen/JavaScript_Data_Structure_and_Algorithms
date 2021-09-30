const array = [0, 1, 0, 3, 12];

function moveZeroes(array){
    for(let i = 0; i < array.length; i++) {
        if(array[i] == 0){
            array.push(array[i]);
            array.splice(i, 1);
        }        
    }
    return array;
}

const result = moveZeroes(array);
console.log(result);
