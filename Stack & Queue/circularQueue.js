
//* circular queue
class CircularQueue {
    constructor(size){
        this.size = size;
        this.queue = new Array(size);
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(element){
        if(this.isFull()){
            return "Queue is full"
        }
        this.queue[this.rear] = element;
        this.rear = (this.rear+1) % this.size;
    }
    
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        const removed = this.queue[this.front];
        this.front = (this.front + 1) % this.size;
        return removed;
    }
    
    peek(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue[this.front]
    }
    isEmpty(){
        return this.front === this.rear;
    }
    
    isFull(){
        return (this.rear+1) % this.size === this.front;
    }
    
    Quesize(){
        return (this.rear-this.front + this.size) % this.size;
    }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
console.log(circularQueue.dequeue()); 
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.enqueue(60);  
console.log(circularQueue.peek());   
console.log(circularQueue.Quesize());
