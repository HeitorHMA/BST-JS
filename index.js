//Binary Search Tree//
class treeNode {
    constructor (value){
        this.value = value
        this.left = null
        this.right = null
}}
let arr = [1,2,3,4,5,6,7];
let n = arr.length;
function createBST(array , start , end){
    let mid = parseInt((start + end) / 2);
    let rootNode = new treeNode (array [mid])
    rootNode.left = createBST (array,start,mid - 1)
    rootNode.right = createBST (array,mid + 1,end)
    return treeNode
}
console.log (createBST(arr , 0 , n - 1))
