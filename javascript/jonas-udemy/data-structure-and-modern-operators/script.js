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
  //object(rest) me object(openhr) me object(fri,thur) mein fir object(open/close) behenchod
  openingHours: {
    thur: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 2,
      close: 8,
    },
    sat: {
      open: 9,
      close: 12,
    },
  },
  order(staterIndex, mainIndex) {
    //idhr dekho sir shorthand method
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    //idhr dekho sir shorthand method
    //WHY DESTRUCTURING IN parameter?

    // ANS -> 2 REASONS :

    // 1.Instead of receiving four separate parameters, the function receives
    // one object and immediately destructures it.

    // Without destructuring
    // orderDelivery(starterIndex, mainIndex, time, address) {
    //   console.log(
    //     `Order received ${this.starterMenu[starterIndex]} of ${this.mainMenu[mainIndex]} at ${time} on ${address}`
    //   );
    // }
    // Call it like this:
    // restaurant.orderDelivery(2, 0, "22:30", "Delhi");

    // 2. Here you must remember the exact order:
    // starterIndex
    // mainIndex
    // time
    // address

    // If you accidentally do
    // restaurant.orderDelivery("Delhi", 2, 0, "22:30");

    // everything gets mixed up
    // .
    console.log(
      `order recieved ${this.starterMenu[starterIndex]} of ${this.mainMenu[mainIndex]} at ${time} on ${address}`,
    );
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//DESTRUCITNG OBJECTS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//In objects - order of variables doesn't matter
//MENTOS ZINDAGI
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//RENAMING VARIABLES(of above restaurant OBJECT)
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//DEFAULT VALUES
// WHY DO WE USE THIS? - iN REAL WORLD , we dont have data , we take it from user
// so , it's preferable to use default values like this !!
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//MUTATING VARIABLES
let ab = 111;
let bc = 829;
let obj = { ab: 23, bc: 17 };
({ ab, bc } = obj); //OBJ LITERAL EXPRESSION(we have to wrap this within () otherwise syntax error)
console.log(obj);
console.log(ab, bc);

//NESTED OBJECTS
// const { fri } = restaurant.openingHours;
// console.log(fri);
// //IN DESCONSTRUCTING: jitna andr ghusoge utne andr ka maal milega
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

//if we dont want to use restaurant. so we can declare opening hours variable outside this object
const { name, openingHours, categories } = restaurant;
const { fri } = openingHours;
console.log(fri);
//EVEN POWERFUL TO MAKE SIMPLIFIED CODE
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
//GETTING VALUES FROM FUNCTION
restaurant.orderDelivery({
  time: "20:00",
  address: "chattisgarh",
  mainIndex: 2,
  starterIndex: 1,
});
