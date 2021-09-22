function compressBoxesTwice(boxes) {
    
    boxes.forEach(box => { // O(n)
        console.log(box);
    });

    boxes.forEach(box => { // O(n)
        console.log(box);
    });
}
// O(n)

// Here two different inputs are used. So, should be treated as such
function compressBoxesTwice(boxes, boxes2) {
    
    boxes.forEach(box => { // O(m)
        console.log(box);
    });

    boxes2.forEach(box => { // O(n)
        console.log(box);
    });
}
// O(m+n)