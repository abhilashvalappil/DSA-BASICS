class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }

//* Add node at the end
    append(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    //* Add node at the beginning
    prepend(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    //* remove node from list
    remove(data){
        if(!this.head){
            return;
        }

        if(this.head.data === data){
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current.next && current.next.data !== data){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next
        }
    }

    //* array to linkedlist
    arrToLinkedList(arr){
        if(arr.length === 0){
            return;
        }
        this.head = new Node(arr[0]);
        let current = this.head;

        for(let i=1; i<arr.length; i++){
            current.next = new Node(arr[i]);
            current = current.next;
        }
    }

    printList(){
        const elements = [];
        let current = this.head;
        while(current){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}

const list = new SinglyLinkedList();
list.append(5);
list.append(7);
list.append(4);
list.printList();

list.prepend(8);
list.printList();


list.remove(7);
list.printList()


const arr = [1, 2, 3, 4, 5];
list.arrToLinkedList(arr);
list.printList()