class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = new Trie();
        for(const word of words){
            trie.insert(word);
        }
        const ROW = board.length, COL = board[0].length;
        const res = [];
        let str = '';
        const dfs = (r,c, node) => {
            if(trie.search(str)){
                res.push(str);
                node.word = false;
            }
            if(Math.min(r,c)<0 || r == ROW || c == COL || board[r][c] == '' || !node.neighbours[board[r][c]]){
                return;
            }
            const ch = board[r][c];
            str += ch;
            board[r][c] = '';
            const nextNode = node.neighbours[ch];
            dfs(r-1,c, nextNode);
            dfs(r+1,c, nextNode);
            dfs(r,c-1, nextNode);
            dfs(r,c+1, nextNode);
            board[r][c] = str.at(-1);
            str = str.slice(0,-1);
        }
        for(let i=0; i< ROW; i++){
            for(let j=0; j< COL; j++){
                dfs(i,j,trie.root);
            }
        }
        return res;
    }
}

class TrieNode {
    constructor(){
        this.neighbours = {};
        this.word = false;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let curr = this.root;
        for(const ch of word){
            if(!curr.neighbours[ch]){
                curr.neighbours[ch] = new TrieNode();
            }
            curr = curr.neighbours[ch];
        }
        curr.word = true;
    }

    search(word){
        let curr = this.root;
        for(const ch of word){
            if(!curr.neighbours[ch]){
                return false;
            }
            curr = curr.neighbours[ch];
        }
        return curr.word;
    }
}