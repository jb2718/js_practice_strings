/* 
Given a string s and an integer array indices of the same length.
The string s will be shuffled such that the character at the ith position moves to 
indices[i] in the shuffled string.

Return the shuffled string.

*/
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

var restoreString = function(s, indices) {
    let stringStore = new Array(s.length)

    for(var i = 0; i < s.length; i += 1) {
        stringStore[indices[i]] = s.charAt(i)
    }

    return stringStore.join('')
}



// Tests/Examples

//-------- Happy Paths -------- 
console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))    // returns "leetcode"
console.log(restoreString("abc", [0,1,2]))                   // returns "abc"
console.log(restoreString("aiohn", [3,1,4,2,0]))             // returns "nihao"
console.log(restoreString("aaiougrt", [4,0,2,6,7,3,1,5]))    // returns "arigatou"
console.log(restoreString("art", [1,0,2]))                   // returns "rat"

//-------- Edge Cases -------- 
//Empty String
console.log(restoreString("", []))                   // returns ""
//One character
console.log(restoreString("a", [0]))                   // returns "a"