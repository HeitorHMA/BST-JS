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

//buildTree Function//
function buildTree(array,start,end){

    let treeArray = filterDuplicates (array);
    treeArray = sort(treeArray); 

    let mid = parseInt((start+end)/2);
    let node = new Node (array[mid]);
    node.left = buildTree(array,start,mid-1);
    node.left = buildTree(array,mid+1,end);
 };


const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
console.log(buildTree(arr))