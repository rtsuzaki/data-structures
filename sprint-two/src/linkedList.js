var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var count = 0;
  var countString = count.toString();
  var beforeCountString = (count-1).toString();
  // list.previous = count

  list.addToTail = function(value) {
    if (list.head === null) {
      var newNode = Node(value);
      list[countString] = newNode;
      list.head = list[countString];
      list.tail = list[countString];
      count++;
      countString = count.toString();
      beforeCountString = (count-1).toString();
    } else {
      var newNode = Node(value);
      list[countString] = newNode;
      list[beforeCountString].next = list[countString];
      list[countString] = newNode;
      list.tail = list[countString];
      count++;
      countString = count.toString();
      beforeCountString = (count-1).toString();
    }
  };

  list.removeHead = function() {
    var currentHead = list.head;
    var temp = list.head.next;
    var tempHeadValue = currentHead.value; 
    list.head.next = null;
    list.head.value = null;
    list.head = temp;
    return tempHeadValue;
    //returns former head node
  };

  list.contains = function(target) {
    var result = false;
    for (var key in list) {
      if (list[key].value === target) {
        result = true;
      }
      // if (key.next === null) {
      //   return false;
      // }
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};