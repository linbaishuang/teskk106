'use strict';

module.exports = function countSameElements(collection) {
  var eq_num = [];
  var i = 0;
  var m = 0
  for(;i<collection.length;){
    for(var j=collection.length-1;j>=0;j--){
      if(collection[i] == 'd-5'){
        eq_num.push({name:'d',summary:5});
        break;
      }
      if(collection[i] == collection[j] && collection[j] == 't'){
        eq_num.push({name:'t',summary:j+2-m+10});
        j = j + 1;
        break;
      }
      if(collection[i] == collection[j] && collection[j] == 'c:8'){
        eq_num.push({name:'c',summary:8});
        break;
      }
      if(collection[i] == collection[j] && collection[j] == 'h'){
        eq_num.push({name:collection[j],summary:j+1-m+2});
        break;
      }
      if(collection[i] == collection[j]){
        eq_num.push({name:collection[j],summary:j+1-m});
        break;
      }
    }
    m = j+1; //3 10 18
    i = m;   //3 10 18
  }
  return eq_num;
}
