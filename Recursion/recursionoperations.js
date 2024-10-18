//* function to find factorial 
function factorial(n){
    if(n <= 1){
        return 1;
    }

    return n * factorial(n-1)
}

console.log(factorial(4));


//* function to find fibonacci
function fibonacci(n){
    if(n <= 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(6))




//* find sum of array
function recursiveSum(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + recursiveSum(arr.slice(1))
}

let array = [5,2,7,3,4];
console.log(recursiveSum(array))


//*** find sum of array
function arraySum(arr,index = 0){
    if(index === arr.length){
        return 0;
    }

    return arr[index] + arraySum(arr,index+1)
}
let nums = [1, 2, 8, 4, 5]
console.log(arraySum(nums))


//***** find sum of array
function arrSum(arr,n){
    if(n === 0){
        return 0;
    }
    return arr[n-1] + arrSum(arr,n-1)
}
let numbers = [2, 8, 6, 4, 5]
console.log(arrSum(numbers,numbers.length))


//* find odd num sum ***********
function oddSum(arr){
    if(arr.length === 0){
        return 0;
    }

    if(arr[0] % 2 !== 0){
        return arr[0] + oddSum(arr.slice(1))
    }else{
        return oddSum(arr.slice(1))
    }
}

console.log(oddSum(array))


//**** odd num sum **********
function oddArrSum(arr,index = 0){
    if(index === arr.length){
        return 0;
    }
    if(arr[index] % 2 !== 0){
        return arr[index] + oddSum(arr,index+1)
    }else{
        return oddSum(arr,index+1)
    }
}

console.log(oddArrSum(array))



//**** Even num sum *******

function evenSum(arr){
    if(arr.length === 0) return 0;

    if(arr[0] % 2 === 0){
        return arr[0] + evenSum(arr.slice(1))
    }else{
        return evenSum(arr.slice(1))
    }
}
console.log(evenSum(array))



//** find max number from array 

function findMax(arr, index=0, max=0){
    if(index === arr.length){
        return max;
    }

    if(arr[index] > max){
        max = arr[index]
    }

    return findMax(arr, index+1, max)
}
const arraynums = [7,3,4,8,5];

console.log(findMax(arraynums))



//*** reverse array  **********

function reverseArr(arr, start=0, end=arr.length-1){
    if(start >= end){
        return arr; 
    }

    [arr[start], arr[end]] = [arr[end], arr[start]]

    return reverseArr(arr, start+1, end-1)
}

console.log(reverseArr(arraynums))



//******** reverse array and elements ******* 

function reverseArrAndElements(arr, start = 0 , end= arr.length-1){
    if(start >= end){
        return arr;
    }

    [arr[start], arr[end]] = [arr[end], arr[start]];

    arr[start] = reverseDigits(arr[start])
    arr[end]  = reverseDigits(arr[end])

    return reverseArrAndElements(arr, start+1, end-1)

}

function reverseDigits(num){
    return Number(num.toString().split('').reverse().join(''))
}

nums = [123, 456, 789, 10];

console.log(reverseArrAndElements(nums))