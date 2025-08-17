
// //******* MaxHeap
class MaxHeap {
    constructor(){
        this.heap = [];
    }
    
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    
    parent(i){
        return Math.floor((i-1)/2);
    }
    leftchild(i){
        return 2 * i +1;
    }
    rightchild(i){
        return 2 * i +2;
    }
    
    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)
    }
    
    heapifyUp(index){
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex)
        
        while(currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]){
            this.swap(currentIndex,parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex)
        }
    }
    
    extractMax(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }
    
    heapifyDown(index){
        let largest = index;
        const left = this.leftchild(index);
        const right = this.rightchild(index);
        
        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left;
        }
        
        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right;
        }
        
        if(largest !== index){
            this.swap(index,largest);
            this.heapifyDown(largest)
        }
    }
    heapsort(arr){
        const tempHeap = new MaxHeap();
        
        for(let i=0; i<arr.length; i++){
            tempHeap.insert(arr[i])
        }
        let sorted = [];
        for(let i=0; i<arr.length; i++){
            sorted.unshift(this.extractMax())
        }
        return sorted;
    }
    peek(){
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    printHeap(){
        console.log(this.heap)
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(6);
maxHeap.insert(1);
maxHeap.insert(8);

maxHeap.printHeap();
console.log(maxHeap.extractMax());

maxHeap.printHeap();



//* **** Find K largest elements from Min heap
class MinHeap {
    constructor(){
        this.heap = [];
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    leftChild(i){
        return 2 * i +1;
    }
    rightChild(i){
        return 2 * i +2;
    }
    
    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)
    }
    
    heapifyUp(index){
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex);
        
        while(currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]){
            this.swap(currentIndex,parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex)
        }
    }
    extractMin(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
        
        return min;
    }
    
    heapifyDown(index){
        let smallest = index;
        let left = this.leftChild(index);
        let right = this.rightChild(index);
        
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }
        
        if(smallest !== index){
            this.swap(index,smallest);
            this.heapifyDown(smallest)
        }
    }
    peek(){
        return this.heap[0]
    }
    size(){
        return this.heap.length
    }
    heapSort(arr){
        for(let i=0;i<arr.length;i++){
            this.insert(arr[i])
        }
        const newArr=[];

        for(let i=0;i<arr.length;i++){
            newArr.push(this.extractMin())
        }
        return newArr
    }
}

//* function findKLargest(arr,k){
    const heap = new MinHeap();
    
    for(let i=0; i<arr.length; i++){
        if(heap.size() < k){
            heap.insert(arr[i])
        }else if(arr[i] > heap.peek()){
            heap.extractMin();
            heap.insert(arr[i])
        }
    }
    return heap.heap;
}

const values = [10, 4, 3, 50, 23, 90];

const Heap = new MinHeap();
console.log(Heap.heapSort(values));
// const k = 3;
// console.log(findKLargest(arr, k));



// ** find kth largest element
function findKthLargest(arr,k){
    let heap = new MinHeap();
    for(let i=0; i<arr.length; i++){
        if(heap.size() < k){
            heap.insert(arr[i])
        }else if(arr[i] > heap.peek()){
            heap.extractMin();
            heap.insert(arr[i])
        }
    }
    return heap.peek()
}

const arr = [10, 4, 3, 50, 23, 90];
const k = 3;
console.log(findKthLargest(arr, k));












