/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Split string into blocks separated by space
    const string = s.split(' ')

    // Filter out all empty space blocks 
    const newString = string.filter((block) => block.length > 0)

    // Reverse the array of just words and then join them back into
    // a string with a single space inbetween.
    const reversedString = newString.toReversed().join(' ')
    
    return reversedString
};