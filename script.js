function firstNonRepeatedChar(str) {
 // Write your code here
 let charCount={};
 for(let char of str){
    charConunt[char]=(charCount[char]||0)+1;
 }
 for(let char of str){
    if(charCount[char]===1){
        return char;
    }
 }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
