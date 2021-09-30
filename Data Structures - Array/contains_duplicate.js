
const array = [2, 7, 11, 13 , 7];

function containsDuplicate(array) {
    let breakCheck = false;
    let containsDup = false;

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++){
            console.log(array[i], array[j]);
            if(array[i] === array[j]) {
                // console.log("target met!")
                breakCheck = true;
                containsDup = true;
            }            
        }        
        if(breakCheck == true) {break;}
    }
    return containsDup;
}

const func = containsDuplicate(array);
console.log(func);