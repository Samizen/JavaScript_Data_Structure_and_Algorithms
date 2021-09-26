function reverseString(string) {
    let reverseStringArray = [];
    let reverseString = '';
    let stringArray = Array.from(string);
    stringArray.forEach(letter => {
        reverseStringArray.unshift(letter);
    });
    
    reverseStringArray.forEach(letter => {
        reverseString += letter;
    })
    return reverseString;
}

console.log(reverseString("Chari Jelaima!"));
