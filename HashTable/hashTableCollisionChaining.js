//*** hashtable collision chaining
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
        const index = this.hash(key);
        
        if(!this.table[index]){
            this.table[index] = [];
        }
        
        this.table[index].push([key,value])
    }
    
    get(key){
        const index = this.hash(key);
        
        if(this.table[index]){
            for(let i=0; i<this.table[index].length; i++){
                if(this.table[index][i][0] == key){
                    return this.table[index][i][1]
                }
            }
        }
        return undefined;
    }
    
    remove(key){
        const index = this.hash(key);
        
        if(this.table[index]){
            for(let i=0; i<this.table[index].length; i++){
                if(this.table[index][i][0] == key){
                    this.table[index].splice(i,1)
                    return true;
                }
            }
        }
        return false;
    }
    
    printTable(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const hashTable = new HashTable();
hashTable.set("name", "Abhilash");
hashTable.set("country", "India");

console.log(hashTable.get("name"));
hashTable.remove("name");

hashTable.printTable();


//*** remove duplicates from array 

function removeDuplicates(arr){
    const hashTable = {};
    const result = [];

    for(let i=0; i<arr.length; i++){
        if(!hashTable[arr[i]]){
            hashTable[arr[i]] = true;
            result.push(arr[i])
        }
    }
    return result;
}

const array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array))



//*** Remove duplicates from string
function removeduplicates(str){
    const hashtable = {};
    let result = "";
    
    for(let i=0; i<str.length; i++){
        if(!hashtable[str[i]]){
            hashtable[str[i]] = true;
            result += str[i]
        }
    }
    return result;
}

const inputString = "abacabadabacaba";
console.log(removeduplicates(inputString))



//*  frequency of string char **
function charFrequency(str){
    const hashTable = {};
    
    for(let i=0; i<str.length; i++){
        if(hashTable[str[i]]){
            hashTable[str[i]]++;
        }else{
            hashTable[str[i]] = 1;
        }
    }
    return hashTable;
}

const String = "abacabadabacaba";
console.log(charFrequency(String))



//* count occurence **
function countOccur(arr){
    const occurences = {};
    
    for(let i=0; i<arr.length; i++){
        if(occurences[arr[i]]){
            occurences[arr[i]]++;
        }else{
            occurences[arr[i]] = 1;
        }
    }
    return occurences;
}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

console.log(countOccur(fruits))