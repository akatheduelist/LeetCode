/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const stringChars = s.split("");
  let pointer1 = 0;
  let pointer2 = stringChars.length - 1;

  while (pointer1 <= pointer2 && pointer2 >= pointer1) {
    if (
      vowels.includes(s[pointer1].toLowerCase()) &&
      vowels.includes(s[pointer2].toLowerCase())
    ) {
      stringChars[pointer1] = s[pointer2];
      stringChars[pointer2] = s[pointer1];
      pointer1++;
      pointer2--;
    } else {
      if (!vowels.includes(s[pointer1].toLowerCase())) pointer1++;
      if (!vowels.includes(s[pointer2].toLowerCase())) pointer2--;
    }
  }

  return stringChars.join("");
};
