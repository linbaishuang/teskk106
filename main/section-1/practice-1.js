'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var eq_num=[];
    var k = 0;
    for(var i=0;i<collectionA.length;i++){
      for(var j=0;j<collectionB.length;j++){
        if(collectionA[i] == collectionB[j]){
            eq_num[k] = collectionA[i];
            k++;
        }
      }
  }
  return eq_num;
}
