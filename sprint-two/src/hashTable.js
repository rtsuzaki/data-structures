

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //so looks like index is made for us.
  //grab a hold of limitedArray by using a var and store this._storage.
  // var ourStorage = this._storage; //this is our limitedArray;
  //call set on our storage var on (index and [k, v]).
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push([k,v]);
    this._storage.set(index, bucket);
  } else {
    var modded = false;
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[0] === k) {
        this._storage.get(index).spice(index,1);
        this._storage.get(index).push([k,v]);
        modded = true;
      }
    }
    if (modded = false) {
      this._storage.get(index).push([k,v])
    }
  }
}



// if (!this._storage.get(index) === undefined) {
//     for (var i = 0; i < this._storage.get(index).length; i++) {
//       if (this._storage.get(index)[0] === k) {
//         this._storage.get(index)[1] = v;
//       }
//     }
//   } if (!this._storage.get(index) === undefined) {
//     this._storage.get(index).push([k,v])
//   }
// }

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i,1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



