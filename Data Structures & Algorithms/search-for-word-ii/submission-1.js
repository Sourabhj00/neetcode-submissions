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
        const res = new Set();
        const dfs = (r,c, node, currWord) => {
            if(Math.min(r,c)<0 || r == ROW || c == COL || board[r][c] == '' || !node.neighbours[board[r][c]]){
                return;
            }
            const ch = board[r][c];
            board[r][c] = '';
            const nextNode = node.neighbours[ch];
            if(nextNode.word){
                res.add(currWord + ch);
                nextNode.word = false;
            }
            dfs(r-1,c, nextNode, currWord + ch);
            dfs(r+1,c, nextNode, currWord + ch);
            dfs(r,c-1, nextNode, currWord + ch);
            dfs(r,c+1, nextNode, currWord + ch);
            board[r][c] = ch;
        }
        for(let i=0; i< ROW; i++){
            for(let j=0; j< COL; j++){
                dfs(i,j,trie.root, '');
            }
        }
        return Array.from(res);
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
}