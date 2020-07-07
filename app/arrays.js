// eslint-disable-next-line no-implicit-globals
exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((accum, next) => {
      accum += next;
      return accum;
    }, 0)
  },

  remove: function(arr, item) {
    return arr.filter(el => el != item);
  },

  removeWithoutCopy: function(arr, item) {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    let result = arr1.join(' ') + ' ' + arr2.join(' ');
    return result.split(' ');
  },

  insert: function(arr, item, index) {
    let result = [];
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    let total = 0;
    arr.forEach(el => {
      if (el === item) total++;
    });
    return total;
  },

  duplicates: function(arr) {
    let result = [];
    arr.forEach(el => {
      if (this.count(arr, el) > 1) {
        result.push(el);
      }
    });
    result = new Set(result);
    return [...result];
  },

  square: function(arr) {
    let result = arr.map(el => el*el);
    return result;
  },

  findAllOccurrences: function(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        result.push(i);
      }
    }
    return result;
  }
};
