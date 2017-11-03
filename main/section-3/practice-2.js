'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var eq_num = [];
  var c = 0;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<4;j++){
      if(collectionA[i].key == objectB.value[j]){
        c = parseInt(collectionA[i].count/3);
        break;
      }else{
        c = 0;
      }
    }
    eq_num.push({key:collectionA[i].key,count:collectionA[i].count-c});
  }
  return eq_num;
}
