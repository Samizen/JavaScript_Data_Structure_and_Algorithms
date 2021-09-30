const givenArray1 = [2, 3, 4, 5];
const givenArray2 = [3, 4, 8, 9];

const arrayAfterSort = mergeSortedArrays(givenArray1, givenArray2);
console.log(arrayAfterSort);

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1item = array1[0];
    let array2item = array2[0];
    let i = 1;
    let j = 1;

    // Check input:
    if(array2.length === 0){
        return array1;
    }
    if (array1.length === 0) {
        return array2;
    }

    while (array1item || array2item) {
        if (!array2item || array1item < array2item){
            mergedArray.push(array1item);
            array1item = array1[i];
            i++;
        } else {
            mergedArray.push(array2item);
            array2item = array2[j];
            j++;
        }
    }


    return mergedArray
}