/*
    CIT 281 Project 2
    Name: Jorge Soto
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = " ";
  
  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1, alphabet.length - 1)];
  }
  
  console.log(result);

// Returns a single, random, lowercase letter 
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  } 
  let letter = " ";
  for (let i = 0; i < 1; i++) {
    letter += getRandomLetter();
  }
  console.log(letter);

// Returns the random length string between 10 and 20 characters
function getRandomString(minLength, maxLength) {
    let length = getRandomInteger(minLength, maxLength);
    let string = " ";
// this loop adds a letter from getRandomLetter() to the string untill the length is reached from above
    for (let i = 0; i < length; i++) {
        string += getRandomLetter();
    }   
    return string;
}

console.log(getRandomString(10, 20));

// Returns a string in ascending order
function getSortedString(string) {
    return string.split("").sort().join(""); // array methods
}
console.log(getSortedString("xpacd"));
