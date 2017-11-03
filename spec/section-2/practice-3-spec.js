'use strict';
const countSameElements = require('../../main/section-2/practice-3');

describe('practice-2-3', () => {

  const collection = [
    'a', 'a', 'a', //2
    'e', 'e', 'e', 'e', 'e', 'e', 'e', //9
    'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',  //18
    't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]', //27
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',  //36
    'c:8', //37
    'g', 'g', 'g', 'g', 'g', 'g', 'g',  // 44
    'b', 'b', 'b', 'b', 'b', 'b',   //   50
    'd-5'  //51
  ];

  it('把A集合中相同的元素统计出数量', () => {

    const result = countSameElements(collection);

    expect(result).toEqual([
      {name: 'a', summary: 3},
      {name: 'e', summary: 7},
      {name: 'h', summary: 11},
      {name: 't', summary: 19},
      {name: 'f', summary: 9},
      {name: 'c', summary: 8},
      {name: 'g', summary: 7},
      {name: 'b', summary: 6},
      {name: 'd', summary: 5}
    ]);
  });
});
