// Log all pairs of array:
const boxes = [1, 2, 3, 4, 5];

function logAllPairs(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

// logAllPairs(boxes);

function logAll(array) {
    array.forEach(element => { // O(n)
        array.forEach(element1 => { // O(n)
            console.log(element, element1)
        })
    });
}
// O(n^2)


logAll(boxes);

function compressBoxesTwice(boxes, boxes2) {
    
    boxes.forEach(box => { // O(m)
        console.log(box);
        boxes2.forEach(box => { // O(n)
            console.log(box);
        });
    });
}

// O(m*n)