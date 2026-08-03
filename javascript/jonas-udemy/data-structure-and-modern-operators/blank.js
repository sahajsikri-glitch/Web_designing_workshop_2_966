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

//default value prop
const {};
//nested destructing

//02.Invent your own mini examples

const cse = {
  branch: ["ds", "ai", "core"],
  commonSubjects: ["dstl", "os", "oops", "adv-ds"],
  sections: {
    ds: 12,
    ai: 16,
    core: 14,
  },
  placements: {
    topCompanies: {
      ds: "5%",
      ai: "10%",
      core: "15%",
    },
    avgCompanies: {
      ds: "30%",
      ai: "30%",
      core: "35%",
    },
    massRecruiter: {
      ds: "12%",
      ai: "25%",
      core: "17%",
    },
    compareBranches({ sections, placements: { Companies } }, branch1, branch2) {
      (console.log(
        `${branch1}: ${sections} sections, Top placement: ${topCompanies[branch1]}`,
      ),
        console.log(
          `${branch1}: ${sections} sections, Top placement: ${topCompanies[branch1]}`,
        ));
    },
  },
};
cse.compareBranches({
  sections: "ai",
  // placements:,
  branch1: "ai",
  branch2: "core",
});
//basic +renaming
