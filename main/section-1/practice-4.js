'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var eq_num = [];
  var k = 0;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<4;j++){
      if(collectionA[i].key == objectB.value[j]){
        eq_num[k] = collectionA[i].key;
        k++;
      }
    }
  }
  return eq_num;
}
