exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    return arr.reduce(function(a, b){
      return a + b
    })
  },

  remove : function(arr, item) {
    var cleanArr = arr;
    while (cleanArr.indexOf(item) > 0){
      cleanArr.splice(cleanArr.indexOf(item), 1)
    }
    return cleanArr
  },

  removeWithoutCopy : function(arr, item) {
    while (arr.indexOf(item)>0){
      arr.splice(arr.indexOf(item), 1)
    }
    return arr
  },

  append : function(arr, item) {
    arr.push(item);
    return arr
  },

  truncate : function(arr) {
    arr.pop();
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail : function(arr) {
    return arr.slice(1)
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(it){
      if (it == item){
        count += 1;
      }
    })
    return count
  },

  duplicates : function(arr) {
    var dups = [];
    arr.forEach(function(item, i){
      if (arr.indexOf(item) < i) {
        if (dups.indexOf(item) < 0){
          dups.push(item)
        }
      }
    })
    return dups
  },

  square : function(arr) {
    var squaredArr = [];
    
    arr.forEach(function(item){
      squaredArr.push(item * item);
    })
    
    return squaredArr
  },

  findAllOccurrences : function(arr, target) {
    var indices = [];
    
    arr.forEach(function(item, i){
      if (item == target) {
        indices.push(i);
      }
    });
    
    return indices
  }
};
