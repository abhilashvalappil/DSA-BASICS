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

    removeDuplicates(){
        let current = this.head;

        while(current && current.next){
            if(current.data === current.next.data){
                current.next = current.next.next
            }
            current = current.next;
        }
    }

    //* remove duplicates from a unsorted linked list
    removeDuplicatesUnsorted(){
    let seen = new Set();
    let current = this.head;
    let prev = null;

    while(current){
        if(seen.has(current.data)){
            prev.next = current.next;
        }else{
            seen.add(current.data)
            prev = current;
        }
        current = current.next;
    }
}

    printList(){
        const elements = []
        let current = this.head;
        while(current){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" -> "))
    }
}

const list = new SinglyLinkedList();

list.append(5);
list.append(2);
list.append(4);
list.append(4);
list.append(7);
list.printList()

list.removeDuplicates();
list.printList()