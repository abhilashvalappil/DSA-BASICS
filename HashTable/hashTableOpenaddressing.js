
//*** hashtable open addressing Linear probing
class HashTable {
    constructor(size = 10){
        this.table = new Array(size);
        this.size = size;
    }
    
    hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size;
    }
    
    set(key,value){
        let index = this.hash(key);
        
        while(this.table[index] !== undefined && this.table[index].key !== key){
            index = (index + 1 ) % this.size;
        }
        this.table[index] = {key,value}
    }
    
    get(key){
        let index = this.hash(key);
        
        while(this.table[index]){
            if(this.table[index].key === key){
                return this.table[index].value;
            }
            index = (index+1) % this.size;
        }
        return undefined;
    }
    
    remove(key){
        let index = this.hash(key);
        
        while(this.table[index]){
            if(this.table[index].key === key){
                this.table[index] = undefined;
                return true;
            }
            index = (index+1) % this.size;
        }
        return false;
    }
    
    printTable(){
        for(let i=0; i<this.size; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const hashTable = new HashTable();
hashTable.set("name", "datastructure");
hashTable.set("country", "India");

console.log(hashTable.get("name"));

hashTable.printTable();




//* **** Quadratic probing
class HashTable {
    constructor(size = 10){
        this.table = new Array(size);
        this.size = size;
    }
    
    hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size;
    }
    
    set(key,value){
        let index = this.hash(key);
        let i = 1;
        
        while(this.table[index] !== undefined && this.table[index].key !== key){
            index = (index + i * i) % this.size;
            i++;
        }
        this.table[index] = {key,value}
    }
    
    search(key){
        let index = this.hash(key);
        let i = 1;
        
        while(this.table[index]){
            if(this.table[index].key === key){
                return this.table[index].value;
            }
            index = (index + i * i) % this.size;
            i++
        }
        return undefined;
    }
    
    remove(key){
        let index = this.hash(key);
        let i =1;
        while(this.table[index]){
            if(this.table[index].key === key){
                this.table[index] = undefined;
                return true;
            }
            index = (index + i * i) % this.size;
            i++;
        }
        return undefined;
    }
}
const hashtable = new HashTable(10);
hashtable.set("name", "Abhilash");
hashtable.set("age", 25);
hashtable.set("location", "India");

console.log(hashtable.search("name"));     
console.log(hashtable.search("age"));        
console.log(hashtable.remove("location"));



//* ******* Rehashing
class HashTable {
    constructor(size = 10){
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }
    
    hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size;
    }
    
    insert(key,value){
        if(this.count / this.size >= 0.7){
            this.rehash();
        }
        let index = this.hash(key)
        while(this.table[index] !== undefined && this.table[index].key !== key){
            index = (index+1) % this.size;
        }
        if(this.table[index] == undefined) this.count++;
        this.table[index] = {key,value}
    }
    
    search(key){
        let index = this.hash(key);
        while(this.table[index]){
            if(this.table[index].key === key){
                return this.table[index].value
            }
            index = (index+1) % this.size;
        }
        return undefined;
    }
    
    rehash(){
        const oldtable = this.table;
        this.size *= 2;
        this.table = new Array(this.size)
        this.count = 0;
        
        for(let data of oldtable){
            if(data !== undefined){
                this.insert(data.key,data.value)
            }
        }
    }
}

const HashTable = new HashTable();
HashTable.insert("name", "Abhilash");
HashTable.insert("age", 20);
HashTable.insert("location", "India");
console.log(HashTable.search("name"));    
console.log(HashTable.search("age"));

























