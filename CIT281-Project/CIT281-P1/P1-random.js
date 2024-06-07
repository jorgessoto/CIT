/*
    CIT 281 Project 1
    Name: Jorge Soto
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random lowercase letter
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// Returns a random length number between 5 and 25
let randomLength = getRandomInteger(5, 25);
// Empty string to store random letters
let randomString = '';

// This loop will use randomLength to generate a random length of string.
// It will then get a random letter from alphabet until it reaches the corresponding lenght
// and add the variable randomString.
for (let i = 0; i < randomLength; i++) {
    const randomLetter = alphabet[randomLength];
    randomString += randomLetter;
}

console.log(randomString);
