var BinarySearchTree = function(value) {
  debugger;
  var node = Object.create(BinarySearchTree.prototype);
  node.value = value;
  node.left = undefined;
  node.right = undefined;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
BinarySearchTree.prototype.storage = [];

BinarySearchTree.prototype.insert = function(num) {
  var currentNode = this;
  var newNode = BinarySearchTree(num);
  var nodeAssign = function(num) {
    if (num < currentNode.value) {
      if (currentNode.left === undefined) {
        currentNode.left = newNode;
        // BinarySearchTree.prototype.store(num);
        BinarySearchTree.prototype.storage.push(num);
      } else {
        //recurse
        currentNode = currentNode.left;
        nodeAssign(num);
      }
    } else {
      if (currentNode.right === undefined) {
        currentNode.right = newNode;
        // BinarySearchTree.prototype.store(num);
        BinarySearchTree.prototype.storage.push(num);      
      } else {
        //recurse
        currentNode = currentNode.right;
        nodeAssign(num);
      }
    }
  }
  nodeAssign(num);
}

BinarySearchTree.prototype.contains = function(num) {
  if (BinarySearchTree.prototype.storage.includes(num)) {
    return true;
  } 
  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  for (var i = 0; i < BinarySearchTree.prototype.storage.length; i++) {
    cb(BinarySearchTree.prototype.storage[i]);
  }
}