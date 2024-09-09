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
//merge function//

function merge (left,right){
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++
        }
        else{
            result.push(right[j])
            j++
        }
    }
    while (i < left.length){
        result.push(left[i])
        i++
    }
    while (j < right.length){
        result.push(right[j])
        j++
    }
    return result;
}

// sort Function//

function sort (array){
    if(array.length <= 1){
    return array;}
    let mid = Math.floor(array.length/2);
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge (sort(left) , sort(right));
}
//sort function//
function clean (array){
let treeArray = filterDuplicates (array);
treeArray = sort(treeArray);
return treeArray}

//buildTree Function//
function buildTree(array,start,end){
    if(start> end){
        return null
    };

    let mid = parseInt((start+end)/2);
    let node = new Node (array[mid]);
    node.left = buildTree(array,start,mid-1);
    node.right = buildTree(array,mid+1,end);
    return node
 };
//apresentation tree//
function present(node){
    if (node == null){
        return;
    }
    console.log(node.data + "");
    present(node.left);
    present(node.right);
}
//testing grounds//
let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
arr = clean(arr);
let n = arr.length;
let nana = buildTree(arr,0,n-1)
//idk//
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  prettyPrint(nana)