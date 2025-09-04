// ***** Trie 
class TrieNode {
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true;
    }
    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
            }
            node = node.children[char]
        }
        return node.isEndOfWord;
    }
    startsWith(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false;
            }
            node = node.children[char]
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello")); 
console.log(trie.search("hel"));     
console.log(trie.startsWith("hel")); 
trie.insert("helium");
console.log(trie.startsWith("hel"));



//**** auto suggestion ****
    autoSuggest(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return [];  
            }
            node = node.children[char];
        }
        
        const suggestions = [];
        this.dfs(node, prefix, suggestions);
        return suggestions;
    }

    //*** Depth-First Search helper to collect words from a given node
    dfs(node, path, suggestions) {
        if (node.isEndOfWord) {
            suggestions.push(path);  
        }
        for (const char in node.children) {
            this.dfs(node.children[char], path + char, suggestions);  
        }
    }

      // Helper function to find words
      dfs(node, prefix, suggestions) {
        if (node.isEndOfWord) suggestions.push(prefix);

        for (let char in node.children) {
            this.dfs(node.children[char], prefix + char, suggestions);
        }
    }

 
 
//********this.dfs(node.children["e"], "appl" + "e", suggestions);
