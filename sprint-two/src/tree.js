var Tree = function(value) {
  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me (it was null)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
// newTree.children.push(  )
  var newNode = Tree(value);
  this.children.push(newNode);  
};

treeMethods.contains = function(target) {
  var isFound = false;
  var nodeSearch = function(node) {
    if (node.value === target) {
      isFound = true;
    } else { //check children array
      for (var i = 0; i < node.children.length; i++) {
        nodeSearch(node.children[i]);
      }
    } 
  }
  nodeSearch(this);   
  return isFound;
};


var extend = function(obj1,obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

// var testTree = Tree(4);

// testTree.addChild(5);
// testTree.children[0].addChild(5)