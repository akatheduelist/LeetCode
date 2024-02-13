/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const string1 = {};
    const string2 = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in string1)) {
            string1[s[i]] = 1
        } else {
            string1[s[i]] += 1
        }
        if (!(t[i] in string2)) {
            string2[t[i]] = 1
        } else {
            string2[t[i]] += 1
        }
    }

    for (let key in string1) {
        if (!(key in string2)) return false
        if (string1[key] !== string2[key]) return false
    }

    return true
};