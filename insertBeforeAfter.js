class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor(){
        this.head = null;
    }

    //* add node to the end
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

    //* insert node after specific value
    insertAfter(x,data){
        const newNode = new Node(data);
        let current = this.head;

        while(current){
            if(current.data === x){
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
        console.log("node with x value not found")
    }

    //* insert node before specific value
    insertBefore(x,data){
        if(!this.head){
            return;
        }
        const newNode = new Node(data)

        if(this.head.data === x){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            if(current.next.data === x){
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
        console.log("Node with x value not found.")
    }

    printList(){
        let current = this.head;
        const elements = [];
        while(current){
            elements.push(current.data)
            current = current.next;
        }
        console.log(elements.join(" -> "))
    }
}

const list = new singlyLinkedList();

list.append(7);
list.append(3);
list.append(5);
list.printList()


list.insertAfter(3,8)
list.printList()

list.insertBefore(3,4)
list.printList()