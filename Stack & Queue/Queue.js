
//**** sample Queue
class Queue {
    constructor(){
        this.items = [];
    }

    //*push item to queue
    enqueue(item){
        this.items.push(item)
    }
    //* remove item from front 
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.items.shift()
    }

    //* show item without removing
    peek(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }
}

const queue = new Queue();
queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(40);

console.log(queue.peek())

queue.dequeue();
console.log(queue.peek())




//**** implement Stack using two Queues

class StackUsingQueue {
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
    }
    
    push(item){
        while(this.queue1.length > 0){
            this.queue2.push(this.queue1.shift())
        }
        this.queue1.push(item)
        
        while(this.queue2.length > 0){
            this.queue1.push(this.queue2.shift())
        }
    }
    
    pop(){
        if(this.queue1.length === 0){
            return "stack is empty"
        }
        return this.queue1.shift()
    }
    
    top(){
        return this.queue1[0]
    }
    
    isEmpty(){
        return this.queue1.length === 0
    }
}

const stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top());   
console.log(stack.pop());
console.log(stack.top());   





//*** Double ended Queue
class Deque {
    constructor(){
        this.items = [];
    }
    
    addFront(item){
        this.items.unshift(item)
    }
    
    addBack(item){
        this.items.push(item)
    }   
    
    removeFront(){
        if(this.items.length === 0){
            return "Deque is empty"
        }
        return this.items.shift()
    }
    
    removeBack(){
        if(this.items.length === 0){
            return "Deque is empty"
        }
        return this.items.pop();
    }
    
    peekFront(){
         if(this.items.length === 0){
             return "Deque is empty"
         }
         return this.items[0]
    }
    
    peekBack(){
         if(this.items.length === 0){
              return "Deque is empty"
         }
         return this.items[this.items.length - 1]
    }
    
    isEmpty(){
        return this.items.length === 0;
    }
    
    size(){
        return this.items.length;
    }
    
    printDeque(){
        return this.items.join(" ")
    }
}

const deque = new Deque();

deque.addBack(10);
deque.addBack(20);
deque.addFront(5);

console.log("Deque after adding elements:", deque.printDeque()); 
console.log("Removed from back:", deque.removeBack()); 
console.log("Final Deque:", deque.printDeque());



//* ******* Queue using stacks

class Questacks {
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(item){
        this.stack1.push(item)
    }
    
    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        
        if(this.stack2.length === 0){
            return "Queue is empty"
        }
        return this.stack2.pop()
    }
    
    isEmpty(){
        return this.stack1.length === 0 && this.stack2.length === 0
    }
    
    front(){
        if(this.stack2.length === 0){
            return "Queue is empty"
        }
        return this.stack2[this.stack2.length - 1] || "Queue is empty"
    }
}

let Queue = new Questacks();

Queue.enqueue(18);
Queue.enqueue(4);
Queue.enqueue(10);
Queue.enqueue(30);

console.log(Queue.dequeue());   
console.log(Queue.front());     
console.log(Queue.dequeue());


//****************** Queue using stack
class QueueUsingStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
   
    enqueue(element) {
      this.stack1.push(element);
    }
  
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      
      if (this.stack2.length === 0) {
        return "Queue is empty";
      }
      
      return this.stack2.pop();
    }
  
   
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
   
    front() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2[this.stack2.length - 1] || "Queue is empty";
    }
  }
  
 
  let queue = new QueueUsingStacks();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.dequeue());  
  console.log(queue.front());     
  console.log(queue.dequeue());   
  