// **** undirected graph implementation Adjacency list
class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            let adjacentvertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentvertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " ->" + this.adjacencyList[vertex].join(","))
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();



// ********* recursive DFS
DFS(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        
        adjacencyList[vertex].forEach(neighbour => {
            if(!visited[neighbour]){
                dfs(neighbour)
            }
        })
    }
    dfs(start);
    return result;
}


// **** Iterative DFS
DFSIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    
    while(stack.length){
        const vertex = stack.pop();
        result.push(vertex);
        
        this.adjacencyList[vertex].forEach(neighbour => {
            if(!visited[neighbour]){
                visited[neighbour] = true;
                stack.push(neighbour)
            }
        })
    }
    return result;
}




// ********** BREADTH FIRST SEARCH
BFS(start){
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    
    while(queue.length){
        let vertex = queue.shift();
        result.push(vertex);
        
        this.adjacencyList[vertex].forEach(neighbour => {
            if(!visited[neighbour]){
                visited[neighbour] = true;
                queue.push(neighbour)
            }
        });
    }
    return result;
}


//*** Directed graph */
class DirectedGraph {
    constructor() {
        this.adjacencyList = {};  
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

     addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
        }
    }

     removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        }
    }

     removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            delete this.adjacencyList[vertex];
 
            for (let key in this.adjacencyList) {
                this.adjacencyList[key] = this.adjacencyList[key].filter(v => v !== vertex);
            }
        }
    }

     display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

const graph = new DirectedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");  
graph.addEdge("A", "C");  
graph.addEdge("B", "C");  

graph.display();

 
