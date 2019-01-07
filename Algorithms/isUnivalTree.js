/**
 * A binary tree is univalued if every node in the tree has the same value.
   Return true if and only if the given tree is univalued.Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    var isUnival = true;
    var rootValue = root.val;
  
    var traversal = function(node) {
      if (!node) {
        return;
      }
  
      if (node.val !== rootValue) {
        isUnival = false;
        return;
      }
  
      traversal(node.left);
      traversal(node.right);
    };
    traversal(root);
  
    return isUnival;
  };
  
/**********************************************************************************************************************/
  
