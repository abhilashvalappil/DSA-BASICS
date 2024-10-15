
//** binary search

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let middle = Math.floor((left+right)/2)

    if(arr[middle] === target){
        return middle;
    }else if(arr[middle] < target){
        left = middle + 1;
    }else{
        right = middle - 1;
    }
}
    return -1;
}

let array = [4,7,10,14,15,20];
let target = 14;

console.log(binarySearch(array,target))



//******* recursive binary search

function recursiveBinarySearch(arr,target,low,high){
    if(low > high){
        return -1;
    }

    const mid = Math.floor((low + high)/2);

    if(arr[mid] === target){
        return mid;
    }else if(arr[mid] < target){
        return recursiveBinarySearch(arr,target,mid+1,high)
    }else{
        return recursiveBinarySearch(arr,target,low,mid-1)
    }
}

let nums = [2,5,8,11,14,17];
let targett = 14;

console.log(recursiveBinarySearch(nums,targett,0,nums.length-1))
