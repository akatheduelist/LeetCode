/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (!s.length) return true

    let charIdx = 0
    let char = s[charIdx]

    for (let i = 0; i < t.length; i++) {
        if (t[i] === char) {
            charIdx++
            char = s[charIdx]
        }
        if (charIdx > s.length - 1) return true
    }
    return false
};