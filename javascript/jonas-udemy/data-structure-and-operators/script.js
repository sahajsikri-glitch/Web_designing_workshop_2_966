"Use strict";
//destructing arrays :
//why it is used? => to help developers extract multiple properties from objects at once.

// const weekdays2 = ["mon", "tue", "wed", "thur", "fri", "sat"];
// const openingHours = {
//   [weekdays2[3]]: {
//     //babuni see this
//     open: 12,
//     close: 22,
//   },
//   [weekdays2[4]]: {
//     //babuni see this
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(staterIndex, mainIndex) {
    //idhr dekho sir shorthand method
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(obj) {
    //idhr dekho sir shorthand method
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`,
    );
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
  openingHours,
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//DESTRUCITNG ARRAYS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const arr = [2, 3, 4];

//AAM ZINDAGI
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

//MNENTOS ZINDAGI
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

//swap variable :

//Boring way
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Mentos zindagi
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// //receive 2 returns from a function
// const [starter, maincourse] = restaurant.order(2, 0);
// console.log(starter, maincourse);

// //nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
//What if we dont know the length of array?what will happen?

const [p, q, r] = [2, 3];
console.log(p, q, r);
