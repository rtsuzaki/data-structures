var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list.1 = {value: 12, next: list.2}
  // list.2 = {value: 12, null}

  list.count = 0; //3

  list.addToTail = function(value) {
    if (list.head === null) {
      var newNode = Node(value)
      list.count = newNode 
      list.head = list.count;
      list.tail = list.count;
      list.count++;
    } else {
      var newNode = Node(value);
      list.count = newNode;
      list.count-1.next = list.count;
      list.tail = list.count;
      list.count++;
      }
  };

  list.removeHead = function() {
//list.count--;
  };

  list.contains = function(target) {
  };

  return list;
    }
};

var Node = function(val) {
  var node = {};

  node.value = val;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
