'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var eq_num = [];
  var i = 0;
  var m = 0;
  var p = 0;
  for(;i<collectionA.length;){
    for(var j=collectionA.length-1;j>=0;j--){
      if(collectionA[i] == collectionA[j]){
        eq_num.push({key:collectionA[j],count:j+1-m});
        break;
      }
    }
    m = j+1;
    i = j+1;
  }





  for(var n=0;n<eq_num.length;n++){
    for(var a=0;a<4;a++){
      if(eq_num[n].key == objectB.value[a]){
        p = parseInt(eq_num[n].count/3);
        eq_num[n].count = eq_num[n].count - p;
        break;
      }
    }
  }
  return eq_num;
}
