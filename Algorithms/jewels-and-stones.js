/**
 * Author: Dionte Johnson
 * Date: 11-3-2018
 * 
 * 
 * O(n) Solution
 * 
 * @param {*} J 
 * @param {*} S 
 * @return {number}
 */

var numJewelsInStones = function(J, S) {
    
    let hashTable = {};
    let count = 0; 
    
    for(let i=0; i<J.length; i++) {
       hashTable[J[i]] = true
    }
    
    for(let k=0; k<S.length; k++) {
       if(hashTable[S[k]] === true){
          count++
       }
    }
    
    return count;
};