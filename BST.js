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
function merge (array1 , array2){
    fI = 0;
    sI =  0;
    firstArr = array1
    secondArr = array2
    sortedArr = [];
while (fI < firstArr.lenght && sI < secondArr.lenght) {
    if (firstArr[fI] < secondArr[sI]){
        sortedArr.push (firstArr[fI])
        fI++
    }
    else{
        sortedArr.push (secondArr[sI])
        sI++
    }}
    return sortedArr
}



//buildTree Function//
function buildTree(array){
    let treeArray = filterDuplicates (array);
    return treeArray
 }
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const arr2 = [1, 8, 9, 23, 8, 9, 14, 3, 5, 7, 9, 67, 6345, 324]
console.log(merge ( arr, arr2)) 