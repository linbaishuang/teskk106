'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var eq_num = [];
  var i = 0;
  var m = 0;
  var e = 0;
  for(;i<collectionA.length; ){
    for(var j=collectionA.length-1;j>=0;j--){
      if(collectionA[i] == collectionA[j] && collectionA[j] == 'd-5'){
        eq_num.push({key:'d',count:'5'});
        break;
      }
      if(collectionA[i] == collectionA[j]){
        eq_num.push({key:collectionA[j],count:j+1-m});
        break;
      }
    }
    m = j+1;
    i = j+1;
  }

  for(var p=0;p<eq_num.length;p++) {
      for (var q=0;q<4;q++) {
          if(eq_num[p].key == objectB.value[q]){
              e = parseInt(eq_num[p].count/3);
              eq_num[p].count = eq_num[p].count - e;
              break;
          }
      }
  }
  return eq_num;
}
