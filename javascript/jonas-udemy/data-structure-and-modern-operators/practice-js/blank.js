"use strict";

//Destructing-arrays:
//01.Basic-tasks

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

//Destucting-objects:{WEAKKKKK}
//Basic-tasks

//create player obj
const player = {
  name: "sahaj",
  num: 17,
  level: 97,
  position: "mid-strike",
  inFieldsPlayed: {
    france: {
      win: 3,
      lost: 7,
      draw: 1,
    },
    spain: {
      win: 9,
      lost: 1,
      draw: 0,
    },
    qatar: {
      win: 2,
      draw: 3,
      lost: 0,
    },
  },
};

//destruct 3 prop & rename
const { name: rename, level: rating } = player;
const { num, position } = player;
// const { level } = rating;
console.log(num, position);
console.log(rename);

//default value prop
// const { numOFMatches = [], goalScored = [] } = player; //MY CODE
//MISTAKE:
// This works technically, but using empty arrays [] as default
// for something that should be a number doesn’t make much sense.
// Better to use 0 or null.
const { numOFMatches = 0, goalScored = 0 } = player; //CORRECT CODE

//nested destructing
// const {
//   france: { win, lost, draw },
//   spain: { win, lost, draw },
//   qatar: { win, lost, draw },
// } = player.inFieldsPlayed;
// //MISTAKE:
// You are declaring win, lost, and draw three times.
// JavaScript does not allow the same variable name
// to be declared more than once in the same scope.
const {
  france: { win: franceWin, lost: franceLost, draw: franceDraw },
  spain: { win: spainWin, lost: spainLost, draw: spainDraw },
  qatar: { win: qatarWin, lost: qatarLost, draw: qatarDraw },
} = player.inFieldsPlayed;
console.log("France:", franceWin, franceLost, franceDraw);
console.log("Spain:", spainWin, spainLost, spainDraw);
console.log("Qatar:", qatarWin, qatarLost, qatarDraw);

//02.Invent your own mini examples
// const cse = {
//   branch: ["ds", "ai", "core"],
//   commonSubjects: ["dstl", "os", "oops", "adv-ds"],
//   sections: {
//     ds: 12,
//     ai: 16,
//     core: 14,
//   },
//   placements: {
//     topCompanies: {
//       ds: "5%",
//       ai: "10%",
//       core: "15%",
//     },
//     avgCompanies: {
//       ds: "30%",
//       ai: "30%",
//       core: "35%",
//     },
//     massRecruiter: {
//       ds: "12%",
//       ai: "25%",
//       core: "17%",
//     },
//     compareBranches({ sections, placements: { Companies } }, branch1, branch2) {
//       (console.log(
//         `${branch1}: ${sections} sections, Top placement: ${topCompanies[branch1]}`,
//       ),
//         console.log(
//           `${branch1}: ${sections} sections, Top placement: ${topCompanies[branch1]}`,
//         ));
//     },
//   },
// };
// cse.compareBranches({
//   sections: "ai",
//   // placements:,
//   branch1: "ai",
//   branch2: "core",
// });
//basic +renaming
