"use strict";

//practice/arrays:
//destruct 1,3,5th value
const number = [2, 3, 4, 5, 6];
const [x, , y, , z] = number;
console.log(x, y, z);

//swap
const arr2 = ["hello", "bye"];
const [main, secondary] = arr2;
console.log(secondary, main);

//pull values from nested arr
let nestedArr = [1, 2, [3, 4]];
const [, , [o, p]] = nestedArr;
console.log(o, p);

//practice/objects:{WEAKKKKK}
//create player obj
const player = {
  name: "sahaj",
  num: 17,
  level: 97,
  position: "mid-strike",
};

//destruct 3 prop & rename
const { name: rename, level: rating } = player;
const { num, position } = player;
// const { level } = rating;
console.log(num, position);
console.log(rename);
