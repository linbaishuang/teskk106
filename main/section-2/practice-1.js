'use strict';

module.exports = function countSameElements(collection) {
  var eq_num = [];
  var m = 0;
  var i = 0;
  for(;i<collection.length;){
      for(var j=collection.length-1;j>=0;j--){
          if(collection[i] == collection[j]){
              eq_num.push({key:collection[j],count:j+1-m});
              break;
          }
      }
      m = j+1;
      i = m;
  }
  return eq_num;
}
