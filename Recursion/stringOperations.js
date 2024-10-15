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


//******* count vowels from string

function countVowels(str){
    if(str.length === 0){
        return 0;
    }
    const vowels = "aeiouAEIOU";
    const isVowel = vowels.includes(str[0]) ? 1 : 0;
    return isVowel + countVowels(str.slice(1))
}

console.log(countVowels("apple"))