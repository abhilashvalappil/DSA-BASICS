
//*** stack implementation
class Stack {
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item)
    }

    pop(){
         if(this.isEmpty()){
            return "stack is empty"
         }
         return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack();

stack.push(20);
stack.push(30);
stack.push(15)

console.log(stack.peek())
stack.print()

stack.pop();
console.log("stack after pop"+ stack.peek())



//* sort stack
sortStack(){
    let tempstack = new Stack();
    
    while(!this.isEmpty()){
        let current = this.pop();
        
        while(!tempstack.isEmpty() && tempstack.peek() > current){
            this.stack.push(tempstack.pop())
        }
        tempstack.push(current)
    }
    return tempstack;
}



//**** function to sort ****

function sortStack(originalstack){
    let tempstack = new Stack();

    while(!originalstack.isEmpty()){
        let current = originalstack.pop()

    while(!tempstack.isEmpty() && tempstack.peek() > current){
        originalstack.push(tempstack.pop())
    }

    tempstack.push(current)
}

return tempstack;
}

stack.push(24);
stack.push(10);
stack.push(5);
stack.push(18);

stack.print()

const sortedStack = sortStack(stack)
sortedStack.print()



//**** Min stack
class Stack {
    constructor(){
        this.stack = [];
        this.minstack = [];
    }
    
    push(item){
        this.stack.push(item)
        
        if(this.minstack.length === 0 || item < this.getMin()){
            this.minstack.push(item)
        }
    }
    
    pop(){
        let poppedItem = this.stack.pop();
        
        if(poppedItem === this.getMin()){
            this.minstack.pop()
        }
    }
    
    top(){
        return this.stack[this.stack.length - 1]
    }
    getMin(){
        return this.minstack[this.minstack.length - 1]
    }
}

const minstack = new Stack();
minstack.push(4);
minstack.push(5);
minstack.push(2);
minstack.push(3)

console.log(minstack.getMin())



//**** delete particular node in stack

class Stack {
    constructor(){
        this.stack = [];
    }
    
    push(item){
        this.stack.push(item)
    }
    
    pop(){
        return this.stack.pop();
    }
    
    peek(){
        return this.stack[this.stack.length - 1]
    }
    
    isEmpty(){
        return this.stack.length === 0;
    }
    
    deleteNode(target){
        let tempstack = [];
        
        while(!this.isEmpty()){
            let topElement = this.pop();
            
            if(topElement === target){
                break;
            }
            tempstack.push(topElement)
        }
        
        while(tempstack.length > 0){
            this.push(tempstack.pop())
        }
    }

    // ****** remove even numbers from a stack
    removeEven(){
        let tempstack = [];
        
        while(!this.isEmpty()){
            let topElement = this.pop();
            
            if(topElement % 2 !== 0){
                tempstack.push(topElement)
            }
        }
        
        while(tempstack.length > 0){
            this.push(tempstack.pop())
        }
    }
    
    printstack(){
        console.log(this.stack)
    }
}

let Stack = new Stack();

Stack.push(5);
Stack.push(2);
Stack.push(8);
Stack.push(7);

Stack.printstack();   

Stack.deleteNode(8);

console.log("Stack after deleting 8:");
Stack.printstack(); 



 
//* balanced paranthesis***

function isbalanced(str){
    let stack = [];
    
    for(let i=0; i<str.length; i++){
        if(str[i] == "(" || str[i] == "{" || str[i] == "["){
            stack.push(str[i])
        }else if(str[i] == ")" && stack.pop() !== "("){
            return false;
        }else if(str[i] == "}" && stack.pop() !== "{"){
            return false;
        }else if(str[i] == "]" && stack.pop() !== "["){
            return false;
        }
    }
    return stack.length === 0
}

console.log(isbalanced("{[()]}")); 



//*********** sort stack */
function sortStack(stack){
    let tempstack = [];
    
    while(stack.length > 0){
        let temp = stack.pop();
        
        while(tempstack.length > 0 && tempstack[tempstack.length - 1] > temp){
            stack.push(tempstack.pop())
        }
        tempstack.push(temp)
    }
    return tempstack
}

let stack = [34, 3, 31, 98, 92, 23];
console.log("Original Stack:", sortStack(stack));