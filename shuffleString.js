/* 
Given a string s and an integer array indices of the same length.
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

*/
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

var restoreString = function(s, indices) {
    
}



// Tests/Examples

//-------- Happy Paths -------- 
restoreString("codeleet", [4,5,6,7,0,2,1,3])    // returns "leetcode"
restoreString("abc", [0,1,2])                   // returns "abc"
restoreString("aiohn", [3,1,4,2,0])             // returns "nihao"
restoreString("aaiougrt", [4,0,2,6,7,3,1,5])    // returns "arigatou"
restoreString("art", [1,0,2])                   // returns "rat"

//-------- Edge Cases -------- 
//Empty String
restoreString("", [])                   // returns ""
//One character
restoreString("a", [0])                   // returns "a"

//-------- Invalid Input -------- 
// Non-string value for first parameter
restoreString(2, [0])                   // returns ""
// Repeated integer values in array
restoreString("abc", [0, 1, 1])                   // returns ""