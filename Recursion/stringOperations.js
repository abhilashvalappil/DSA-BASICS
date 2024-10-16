//** function to reverse string

function reverseStr(str){
    if(str === ""){
        return ""
    }else{
        return str.charAt(str.length-1) + reverseStr(str.slice(0, -1))
    }
}

console.log(reverseStr("hello"))


//****** string reverse 
function reverseString(str){
    if(str.length === 0){
        return str;
    }else{
        return str[str.length -1] + reverseString(str.slice(0, -1))
    }
}

console.log(reverseString("recursion"))




//*** string palindrome

function isPalindrome(str){
    if(str.length <= 1){
        return true;
    }
    if(str[0] !== str[str.length-1]){
        return false;
    }
    return isPalindrome(str.slice(1,-1))
}

console.log(isPalindrome("racecar"))



//****** count vowels from string

function countVowels(str){
    if(str.length === 0){
        return 0;
    }
    const vowels = "aeiouAEIOU";
    const isVowel = vowels.includes(str[0]) ? 1 : 0;
    return isVowel + countVowels(str.slice(1))
}

console.log(countVowels("apple"))



//*****  remove duplicates from string

function removeDuplicates(str,index = 0, result = ""){
    if(index === str.length){
        return result;
    }
    
    let currentChar = str[index];

    if(!result.includes(currentChar)){
        result += currentChar;
    }

    return removeDuplicates(str,index+1, result)
}

console.log(removeDuplicates("banana"))



//**** first occurance of character

function firstOccur(str,char,index=0){
    if(index >= str.length) return -1;
    
    if(str[index] === char){
        return index;
    }
    return firstOccur(str,char,index+1)
}

console.log(firstOccur("apple",'l'))



//***** remove all occurance of character

function removeChar(str,char,index=0){
    if(index === str.length) return "";
    
    if(str[index] === char){
        return removeChar(str,char,index+1)
    }else{
        return str[index] + removeChar(str,char,index+1)
    }
}

console.log(removeChar("banana",'n'))


//***** replace all occurences of character

function replaceChar(str,char,newChar,index=0){
    if(index === str.length) return "";
    
    const currentChar = str[index];
    
    if(currentChar === char){
        return newChar + replaceChar(str, char, newChar, index + 1)
    }else{
        return currentChar + replaceChar(str,char,newChar,index+1)
    }
}

console.log(replaceChar("banana",'a','o'))




//***** count words in a string

function countWords(str){
    str = str.trim();
    
    if(str.length === 0) return "";
    
    const spaceIndex = str.indexOf(' ');
    
    if(spaceIndex === -1){
        return 1;
    }
    return 1 + countWords(str.slice(spaceIndex + 1))
}

console.log(countWords(" my name is "))



//******* replace spaces with sepicific char

function replaceSpaces(str,char,index=0){
    if (index === str.length) {
     return "";
 }
 
 if(str[index] === " "){
     return char + replaceSpaces(str,char,index+1)
 }else{
     return str[index] + replaceSpaces(str,char,index+1)
 }
}
console.log(replaceSpaces("hello world",'_'))



//****** Even index char to uppercase

function alternateCase(str,index = 0){
    if(index >= str.length){
        return "";
    }
    const currentChar = str[index];
    
    if(index % 2 === 0){
        return currentChar.toUpperCase() + alternateCase(str,index+1)
    }else{
        return currentChar + alternateCase(str,index + 1)
    }
}

console.log(alternateCase("hello"))
