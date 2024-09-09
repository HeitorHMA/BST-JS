//Node Class//
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//class Tree//
class Tree {
    constructor(root){
        this.root = root;
    }
}
//filter array function//
function filterDuplicates (array){
    return array.filter((value,index) => array.indexOf(value) === index);
}
//merge sort function//





//buildTree Function//
function buildTree(array){
    let treeArray = filterDuplicates (array);
    return treeArray
 }
const arr = [1,2,3,4,5,6,1,2,3,4,5]
console.log(buildTree(arr))