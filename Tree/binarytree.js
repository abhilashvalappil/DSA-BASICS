// **** Binary tree implementation
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }
    
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    inOrderTraversal(node = this.root){
        if(node){
        this.inOrderTraversal(node.left);
        console.log(node.value)
        this.inOrderTraversal(node.right);
        }
    }
    
    preOrderTraversal(node = this.root){
        if(node){
        console.log(node.value)
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right)
        }
    }
    postOrderTraversal(node = this.root){
        if(node){
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value)
        }
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(8);
tree.insert(2);
tree.insert(7);
tree.insert(10);

console.log("In-order Traversal:");
tree.inOrderTraversal();


console.log("Pre-order Traversal:");
tree.preOrderTraversal();


console.log("Post-order Traversal:");
tree.postOrderTraversal();



// ******* isValid BST
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root,min = -Infinity, max = Infinity){
    if(!root) return true;
    
    if(root.value <= min || root.value >= max) return false;
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(20);

console.log(isValidBST(root));


