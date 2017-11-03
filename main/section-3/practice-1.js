'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var eq_num = [];
  var counts = 2;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<4;j++){
      if(collectionA[i].key == objectB.value[j]){
        counts = counts -1;
        break;
      }else {
        counts = 2;
      }
    }
    eq_num.push({key:collectionA[i].key,count:counts});
  }
  return eq_num;
}
