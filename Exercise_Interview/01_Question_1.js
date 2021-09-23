const array1 = ['a', 'b', 'c', 'd', 'x'];
const array2 = ['z', 'y', 'i'];
    
const array3 = ['a', 'b', 'c', 'd', 'x'];
const array4 = ['z', 'y', 'x'];

function containsCommon(array1, array2) {
    array1.forEach(element => {
        array2.forEach(element2 =>{
            if(element === element2) {
               console.log(true);
               break;
            } 
        })
        console.log(false);        
    });
} 

// containsCommon(array1, array2);
containsCommon(array3, array4);

// inputs: two arrays, output: true or false
// no size limits for arrays
// first solution has O(m*n) so is inefficient
