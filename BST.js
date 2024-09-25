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
    constructor(array,start,end){
        let arrayNew = clean(array);
        arrayNew = sort(array);
        this.root = buildTree(arrayNew,start,end);
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

 //Insert function//
 function insertNode (root,value){
    if (root === null){
        return new Node (value);
    }
    else if (value === root.data){
        return root;
    }
    else if (value < root.data){
        root.left = insertNode(root.left,value)
    }
    else if(value > root.data){
        root.right = insertNode(root.right,value)
    }
    return root;

 }

//apresentation tree//
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

//delete function//
function deleteNode(tree,x){
    if (tree.data === null){
        return null
    };
    if (tree.data > x){
        tree.left = deleteNode (tree.left,x)
    }
    if (tree.data < x){
        tree.right = deleteNode (tree.right,x)
    }
    else if (tree.data === x){
        if (!tree.left && !tree.right){
            return null
        }
        if (!tree.left){
            return tree.right
        }
        if (!tree.right){
            return tree.left
        }
        else if (tree.left && tree.right){
            while (tree.right.left){
                tree.right = tree.right.left
            }
            tree.data = tree.right.data
            tree.right = deleteNode(tree.right,tree.right.data)
        }
    }
    return tree
}
// FIND(VALUE)//
function find (root,value){
    if (root === null){
        return new Node (value);
    }
    else if (value === root.data){
        return root;
    }
    else if (value < root.data){
        return find(root.left,value)
    }
    else if(value > root.data){
        return find(root.right,value)
    }

 }
 //BFS//
 function bsfOrder(root){
    if (!root){
        return [];
    }
    const queue = [];
    const result = [];
    queue.push(root);
    while (queue.length > 0){
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i< levelSize; i++){
        const node = queue.shift();
        currentLevel.push(node.data);
        if (node.left){
            queue.push(node.left)
        }
        if (node.right){
            queue.push(node.right)
        }
    }
    result.push(currentLevel)
}
return result
}
//print InOrder//
function printInorder(root){
    if (root){
        printInorder(root.left)
        console.log(root.data)
        printInorder(root.right)
    }
}
// print PostOrder//
function printPostorder(root)
{
    if (root){
        printPostorder(root.left)
        printPostorder(root.right)
        console.log(root.data)
    }
}
// print PostOrder//
function printPreorder(root)
{
    console.log(root.data)
    printPretorder(root.left)
    printPretorder(root.right)
        
}
 //tstn//
let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67,64 ,65 ,78 ,6345, 324];
arr = clean(arr);
let n = arr.length;

let nana = new Tree (arr,0,n-1)

//idk//
prettyPrint(nana.root)
printInorder(nana.root)



