"use strict";

// //Destructing-arrays:
// //01.Basic-tasks

// //destruct 1,3,5th value
// const number = [2, 3, 4, 5, 6];
// const [x, , y, , z] = number;
// console.log(x, y, z);

// //swap
// const arr2 = ["hello", "bye"];
// const [main, secondary] = arr2;
// console.log(secondary, main);

// //pull values from nested arr
// let nestedArr = [1, 2, [3, 4]];
// const [, , [o, p]] = nestedArr;
// console.log(o, p);

// //Destucting-objects:{WEAKKKKK}
// //Basic-tasks

// //create player obj
// const player = {
//   name: "sahaj",
//   num: 17,
//   level: 97,
//   position: "mid-strike",
//   inFieldsPlayed: {
//     france: {
//       win: 3,
//       lost: 7,
//       draw: 1,
//     },
//     spain: {
//       win: 9,
//       lost: 1,
//       draw: 0,
//     },
//     qatar: {
//       win: 2,
//       draw: 3,
//       lost: 0,
//     },
//   },
// };

// //destruct 3 prop & rename
// const { name: rename, level: rating } = player;
// const { num, position } = player;
// // const { level } = rating;
// console.log(num, position);
// console.log(rename);

// //default value prop
// // const { numOFMatches = [], goalScored = [] } = player; //MY CODE
// //MISTAKE:
// // This works technically, but using empty arrays [] as default
// // for something that should be a number doesn’t make much sense.
// // Better to use 0 or null.
// const { numOFMatches = 0, goalScored = 0 } = player; //CORRECT CODE

// //nested destructing
// // const {
// //   france: { win, lost, draw },
// //   spain: { win, lost, draw },
// //   qatar: { win, lost, draw },
// // } = player.inFieldsPlayed;
// // //MISTAKE:
// // You are declaring win, lost, and draw three times.
// // JavaScript does not allow the same variable name
// // to be declared more than once in the same scope.
// const {
//   france: { win: franceWin, lost: franceLost, draw: franceDraw },
//   spain: { win: spainWin, lost: spainLost, draw: spainDraw },
//   qatar: { win: qatarWin, lost: qatarLost, draw: qatarDraw },
// } = player.inFieldsPlayed;
// console.log("France:", franceWin, franceLost, franceDraw);
// console.log("Spain:", spainWin, spainLost, spainDraw);
// console.log("Qatar:", qatarWin, qatarLost, qatarDraw);

// //02.Invent your own mini examples
// // const cse = {
// //   branch: ["ds", "ai", "core"],
// //   commonSubjects: ["dstl", "os", "oops", "adv-ds"],
// //   sections: {
// //     ds: 12,
// //     ai: 16,
// //     core: 14,
// //   },
// //   placements: {
// //     topCompanies: {
// //       ds: "5%",
// //       ai: "10%",
// //       core: "15%",
// //     },
// //     avgCompanies: {
// //       ds: "30%",
// //       ai: "30%",
// //       core: "35%",
// //     },
// //     massRecruiter: {
// //       ds: "12%",
// //       ai: "25%",
// //       core: "17%",
// //     },
// //     compareBranches({ sections, placements: { Companies } }, branch1, branch2) {
// //       (console.log(
// //         `${branch1}: ${sections} sections, Top placement: ${topCompanies[branch1]}`,
// //       ),
// //         console.log(
// //           `${branch1}: ${sections} sections, Top placement: ${topCompanies[branch1]}`,
// //         ));
// //     },
// //   },
// // };
// // cse.compareBranches({
// //   sections: "ai",
// //   // placements:,
// //   branch1: "ai",
// //   branch2: "core",
// // });
// //basic +renaming

// //SET AND MAPS:

// //[A]Task 1: Basic Set Practice
// //01. create one set :
// const newSet = new Set(["apple", "mango", "banana", "apple"]);
// console.log(newSet.size);

// //02.Check if "JavaScript" exists
// console.log(newSet.has("JavaScript"));

// //03.Add one new language
// console.log(newSet.add("python"));

// //04.Convert it back to an array
// console.log([...newSet]);

// //[B]Task 2: Remove Duplicates (Real-world style)
// const studentIds = [101, 105, 101, 108, 105, 110, 108, 112];
// // Remove the duplicates using a Set and store the unique IDs in a new array.

// const uniqueIds = [...new Set(studentIds)];

// //[C]Task 3: Basic Map Practice
// // 01.Create a Map of 3 students with this structure:
// // Key → student name (string)
// // Value → their marks (number)
// const studentsMap = new Map();
// studentsMap.set("arman", 32).set("khabib", 100).set("pantaj", 77);

// // 02. Add one more student
// studentsMap.set("connor", 56);
// // 03. Get the marks of one student
// studentsMap.get("connor");
// // 04. Check if a student exists
// studentsMap.has("tony");
// // 05. Print the size of the Map
// console.log(studentsMap.size);

// // [D] Task 4: Mini Real-world Example (Connect + Own example)
// // Create a Map called restaurantHours with:
// // Key: day name ("mon", "tue", etc.)
// // Value: opening time (e.g. "9am - 10pm")

// // Then write a small function that receives a day and tells
// // whether the restaurant is open or not (you can hardcode today’s day for now).
// const restaurantHours = new Map();
// restaurantHours
//   .set("mon", "9am -> 10pm")
//   .set("tue", "9am -> 10pm")
//   .set("Wed", "12am -> 8pm")
//   .set("thur", "9am -> 10pm")
//   .set("fri", "9am -> 10pm")
//   .set("sat", "9am -> 10pm")
//   .set("sun", "closed");

// function openDay(day) {
//   restaurantHours.get(day);
// }
// openDay("tue");

// //MISTAKES:
// // What’s wrong:
// // Day names are inconsistent ("Wed" has capital W, others are lowercase). This can cause bugs later.
// // Your function does nothing useful:
// function openDay(day) {
//   const hours = restaurantHours.get(day);

//   if (hours === "closed") {
//     console.log("Restaurant is closed today");
//   } else if (hours) {
//     console.log(`Restaurant is open: ${hours}`);
//   } else {
//     console.log("Invalid day");
//   }
// }

// openDay("tue");
// openDay("sun");

//STRINGS :

// [A]Task 1: Basic Practice
// 01 : Create a string with your full name
const str = "Sahaj Sikri";
// 02 : print its length
console.log(str.length);
// 03 : first character, and last character
console.log(str[0], str.slice(-1));
// 04 : Convert the same string to uppercase and lowercase
console.log(str.toLowerCase());
console.log(str.toUpperCase());
// 05 : Using slice, extract only your first name
console.log(str.slice(0, 5));
// 06 : Check if a string starts with "Java" and ends with "Script" (case-insensitive).
const testStr = "JavaScript";
console.log(
  testStr.toLowerCase().startsWith("java") &&
    testStr.toLowerCase().endsWith("script"),
);
// 07 : Split the string "apple+banana+mango+orange" into an array and then join it back with " | "
const fruits = "apple+banana+mango+orange";
console.log(fruits.split("+").join(" | "));
//[B]Task 2: Fix & Improve
// You have this email:
const email = "   SaHaJ@Email.COM   ";
const newEmail = email.toLowerCase().trim();

// [C]Task 3: Real-world style
// Write a function checkPasswordStrength that receives a password (string).

// If the password length is less than 8 → print "Weak password"
// Otherwise → print "Strong password"

const checkPasswordStrenght = function (password) {
  if (password.length < 8) {
    console.log("weak password");
  } else {
    console.log("strong password");
  }
};
checkPasswordStrenght("sahhshss");

// [D]Task 4: Mini practical
// 01. Write a function capitalizeWords that capitalizes the first letter of every word in a sentence.

// Input: "i love learning javascript"
// Output: "I Love Learning Javascript"
// const capitalizeWords = function (

// MISTAKES :
// // there is a cleaner and more modern way using .map().
// split(" ")                    // turns sentence into array of words
// .map(word => ...)              // transforms every word
// .join(" ")                     // turns array back into a sentence
// Better version (Recommended)JavaScript
// (TASK 4 - i)
const capitalizeWords = function (input) {
  return input
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

console.log(capitalizeWords("i love learning javascript"));

//better way (TASK 4 -ii)
const hideEmail = function (email) {
  const [username, domain] = email.split("@");
  const maskedUsername =
    username[0] + "*".repeat(username.length - 2) + username.slice(-1);
  return maskedUsername + "@" + domain;
};

console.log(hideEmail("sahajsikri@gmail.com"));
