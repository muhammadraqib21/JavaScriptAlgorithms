let letters = [];
let word = "racecar"
let reverseWord = "";

for (let i = 0; i < word.length; i++) {
    // push is always in front of array
   letters.push(word[i])
}

for (let i = 0; i < word.length; i++) {
    // push is always in front of array
   reverseWord += letters.pop()
}

if(reverseWord === word) {
    console.log('word is palindrome')
} else {
    console.log('word is not palindrome')
}


// push add to the end of the stack
// pop remove the item at the end of the stack
// peek looks at the end of the stack but doesn't remove it