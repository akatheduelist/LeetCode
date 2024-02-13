/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const string1 = s.split("");
    const string2 = t.split("");

    for (let i = 0; i < string2.length; i++) {
        if (!string1.length) {
            return false;
        } else if (!string1.includes(string2[i])) {
            return false;
        } else {
            string1.splice(string1.indexOf(string2[i]), 1);
        }
    }

    return true;
};