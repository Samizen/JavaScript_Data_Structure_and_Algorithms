let user = {
    name: "Samit Paudel",
    age: 27,
    magic: false,
    scream: function() {
        console.log('Ahhhhh!');
    }
}

// Access:
console.log(user.age);

// Insertion of new properties:
user.spell = 'Solanum Visibilio';
console.log(user);