class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    //** insert node at the end
    insert(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
    }
    
    //* insert node at the beginning
    prepend(data){
        const newNode = new Node(data);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
    }

    //* remove last node
    removeLast(){
        if(!this.tail){
            return;
        }
        if(this.tail === this.head){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null
        }
    }

    //* reverse list
    reverse(){
        let current = this.head;
        let temp = null;
        
        while(current){
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        if (temp !== null) {
      this.head = temp.prev;
    }
    }
    
    displayNode(){
        let current = this.head;
        const elements = []
        
        while(current){
            elements.push(current.data)
            current = current.next;
        }
        console.log(elements.join("<->"))
    }
}

dll = new DoublyLinkedList();
dll.insert(5)
dll.insert(7)
dll.insert(4)
dll.insert(6)

dll.displayNode()

dll.prepend(18)
dll.displayNode()

dll.removeLast();
dll.displayNode()
