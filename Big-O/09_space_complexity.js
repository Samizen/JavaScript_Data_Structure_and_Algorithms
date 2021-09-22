function boooo(n) {
    for(let i = 0; i < n.length; i++) {
        console.log('boooooo!');
    }
}

boooo([1, 2, 3, 4, 5]);

// The space complexity of this function is O(1) because no new memory allocation (creation of variable, data structures and so on) is done by the function

function arrayHi(n) {
    let hiArray =[];
    for (let i = 0; i < n; i++) {
         hiArray[i] = 'hi';        
    }
    return hiArray;
}
// O(n) because data structure array is created and programmetically allocated for expansion upto n times