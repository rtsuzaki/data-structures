var Tree = function(value) {
  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = null;  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
};

treeMethods.contains = function(target) {
};

var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
