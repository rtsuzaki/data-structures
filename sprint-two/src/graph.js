

// Instantiate a new graph
// Use pseudoclassical class pattern
var Graph = function() {
  //this = Object.create(Graph.prototype);
  //return this;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[String(node)] = [node]; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (key === String(node)) {
      return true;
    }
  }
  return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    debugger; 
  for (var i = 1; i < this[String(node)].length; i++) {
    this.removeEdge(node, this[String(node)][i]);
  }  
  delete this[String(node)];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[String(fromNode)].includes(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[String(fromNode)].push(toNode);
  this[String(toNode)].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var spliceOne = this[String(fromNode)].indexOf(toNode);
  var spliceTwo = this[String(toNode)].indexOf(fromNode);
  this[String(fromNode)].splice(spliceOne);
  this[String(toNode)].splice(spliceTwo);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var arrKeys = Object.keys(this);
  arrKeys.forEach(function(elem) {
    cb(elem);
  });
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


