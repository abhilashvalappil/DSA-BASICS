class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor(){
        this.head = null;
    }

    insert(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
        }else{
            let current = this.head;
            while(current.next !== this.head){
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    search(target){
        if(!this.head){
            return false;
        }

        let current = this.head;
        do{
            if(current.data === target){
                return true;
            }
            current = current.next;
        }while(current !== this.head);
        return false
    }

    display(){
        if(!this.head) return;
        let current = this.head;

        do{
            console.log(current.data);
            current = current.next;
        }while(current !== this.head)
    }
}

cll = new CircularLinkedList();

cll.insert(7);
cll.insert(5);
cll.insert(3)
cll.display()

console.log(cll.search(5))