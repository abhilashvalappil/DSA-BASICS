//* function to find factorial 
function factorial(n){
    if(n <= 1){
        return 1;
    }

    return n * factorial(n-1)
}

console.log(factorial(5));


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



//* find odd num sum
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



//******* Even num sum
function evenSum(arr){
    if(arr.length === 0) return 0;

    if(arr[0] % 2 === 0){
        return arr[0] + evenSum(arr.slice(1))
    }else{
        return evenSum(arr.slice(1))
    }
}

console.log(evenSum(array))