// "Use strict";
// //destructing arrays :
// //why it is used? => to help developers extract multiple properties from objects at once.

// // const weekdays2 = ["mon", "tue", "wed", "thur", "fri", "sat"];
// // const openingHours = {
// //   [weekdays2[3]]: {
// //     //babuni see this
// //     open: 12,
// //     close: 22,
// //   },
// //   [weekdays2[4]]: {
// //     //babuni see this
// //     open: 11,
// //     close: 23,
// //   },
// //   sat: {
// //     open: 0, // Open 24 hours
// //     close: 24,
// //   },
// // };
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   //object(rest) me object(openhr) me object(fri,thur) mein fir object(open/close) behenchod
//   openingHours: {
//     thur: {
//       open: 12,
//       close: 12,
//     },
//     fri: {
//       open: 2,
//       close: 8,
//     },
//     sat: {
//       open: 9,
//       close: 12,
//     },
//   },
//   order(staterIndex, mainIndex) {
//     //idhr dekho sir shorthand method
//     return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//     //idhr dekho sir shorthand method
//     //WHY DESTRUCTURING IN parameter?

//     // ANS -> 2 REASONS :

//     // 1.Instead of receiving four separate parameters, the function receives
//     // one object and immediately destructures it.

//     // Without destructuring
//     // orderDelivery(starterIndex, mainIndex, time, address) {
//     //   console.log(
//     //     `Order received ${this.starterMenu[starterIndex]} of ${this.mainMenu[mainIndex]} at ${time} on ${address}`
//     //   );
//     // }
//     // Call it like this:
//     // restaurant.orderDelivery(2, 0, "22:30", "Delhi");

//     // 2. Here you must remember the exact order:
//     // starterIndex
//     // mainIndex
//     // time
//     // address

//     // If you accidentally do
//     // restaurant.orderDelivery("Delhi", 2, 0, "22:30");

//     // everything gets mixed up
//     // .
//     console.log(
//       `order recieved ${this.starterMenu[starterIndex]} of ${this.mainMenu[mainIndex]} at ${time} on ${address}`,
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`,
//     );
//   },
//   orderPizza: function (mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(otherIng);
//   },
// };

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //DESTRUCITNG ARRAYS
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // const arr = [2, 3, 4];

// //AAM ZINDAGI
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// //MNENTOS ZINDAGI
// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// //swap variable :

// //Boring way
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //Mentos zindagi
// // let [main, secondary] = restaurant.categories;
// // console.log(main, secondary);

// // //receive 2 returns from a function
// // const [starter, maincourse] = restaurant.order(2, 0);
// // console.log(starter, maincourse);

// // //nested array
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// //What if we dont know the length of array?what will happen?

// const [p, q, r] = [2, 3];
// console.log(p, q, r);//undefined show hoga

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //DESTRUCITNG OBJECTS
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// //In objects - order of variables doesn't matter
// //MENTOS ZINDAGI
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// //RENAMING VARIABLES(of above restaurant OBJECT)
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //DEFAULT VALUES
// // WHY DO WE USE THIS? - iN REAL WORLD , we dont have data , we take it from user
// // so , it's preferable to use default values like this !!
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //MUTATING VARIABLES
// let ab = 111;
// let bc = 829;
// let obj = { ab: 23, bc: 17 };
// ({ ab, bc } = obj); //OBJ LITERAL EXPRESSION(we have to wrap this within () otherwise syntax error)
// console.log(obj); // 23 17
// console.log(ab, bc);//23 17

// //NESTED OBJECTS
// // const { fri } = restaurant.openingHours;
// // console.log(fri);
// // //IN DESCONSTRUCTING: jitna andr ghusoge utne andr ka maal milega
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// //if we dont want to use restaurant. so we can declare opening hours variable outside this object
// const { name, openingHours, categories } = restaurant;
// const { fri } = openingHours;
// console.log(fri);
// //EVEN POWERFUL TO MAKE SIMPLIFIED CODE
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //GETTING VALUES FROM FUNCTION
// restaurant.orderDelivery({
//   time: "20:00",
//   address: "chattisgarh",
//   mainIndex: 2,
//   starterIndex: 1,
// });

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //THE SPREAD OPERATOR
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// //basic
// const arr = [7, 8, 9];
// console.log(1, 2, arr[0], arr[1], arr[2]);
// console.log(1, 2, ...arr);

// //copy array
// const mainMenu2 = [...restaurant.mainMenu, "gnoucchi"];
// console.log(mainMenu2);
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// //ITERABLES = arrays , strings , maps , sets but not objects

// //join 2 array
// const menuz = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuz);
// //unpacking strings
// const str = "sahej";
// console.log(...str, " ");
// const letters = [...str, " "];
// console.log(letters);

// //syntax error
// // console.log(`${..str}`)

// //function
// const ingredients = [
//   prompt("let's make pasta! -: ingredient-1 ? "),
//   prompt("ingredient-2 ?"),
//   prompt("ingredient-3 ?"),
// ];
// console.log(ingredients);
// //way-1
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //way-2 better (what if we dont know how many ingr he's gonna enter yea?)
// restaurant.orderPasta(...ingredients);

// //Iterables : string , map , set ,arrays BUT NOT OBJECTS
// //objects = NOT iterable but spread operator WORKS(IN ES6 UPDATE)

// // copy object + doing some additions (without changing prev object)
// const newRest = { foundIn: "1998", ...restaurant, founder: "guissue" };
// console.log(newRest);

// //we are making clone of it using spread and its too easy to make WOW!!
// const restCopy = { ...restaurant };
// restCopy.name = "ristorante";
// console.log(restCopy.name);
// console.log(restaurant.name);

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //THE REST PATTERNS AND PARAMETERS(opposite of spread)
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// //DESTRUCTING
// //SPREAD: cause RIGHT SIDE OF = operator
// const arr3 = [1, 2, ...[3, 4]];
// console.log(arr3);

// //REST : cause LEFT SIDE OF = operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(1, 2, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// //function
// const add = function (...numbers) {
//   //rest operator(pack fucn)
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3, 5, 7);
// add(1, 9);
// const x = [2, 9, 5];
// add(...x); //spread operator(unpack func)

// // //object-method calling
// restaurant.orderPizza("mushroom", "onion", "olives"); //array me daaldia dono ko
// restaurant.orderPizza("mushroom");

// //WHERE IS SPREAD VS REST USE?
// // spread - values seperated by commas
// // res - variables seperated by commas

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//SHORT CIRCUITING (&& and ||)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//OR OPERATOR
//basic
console.log(3 || "sahej");
// console.log('' || 'sahej');
// console.log(true || 0);
console.log(undefined || null); //bas phela check krunga uske baad jo bhi h idc
console.log(null || undefined);

//way-01
const guest1 = restaurant.numGUest ? restaurant.numGuest : 10;
console.log(guest1);

//way-02(just observe how fast and time saving thing thsis is)
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

//AND OPERATOR(works ekdum opp of or operator)

//basic
console.log(0 && "sahej");
console.log("sahej" && 0);

//example for better understanding(HOW TO USE)
//way - 01
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'onion');
// }
// //way - 02
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'onion');

//example-02
const rest1 = {
  name: "chaayos",
  numGUest: 0,
};
const rest2 = {
  owner: "sahej",
  numGuest: 71,
};
rest1.numGUest = rest1.numGUest && 17;
rest2.numGuest = rest2.numGuest && 14;
console.log(rest1.numGUest); //falsy hogya mamla shuru me atakgya
console.log(rest2.numGuest); //real hogya toh mamla aage jaake failgya
rest1.owner = rest1.owner && "ANONYMOUS";
rest2.owner = rest2.owner && "ANONYMOUS";
console.log(rest1);
console.log(rest2);

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //NULLISH-COALESCING OPERATOR
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //basic
// Take 0 and '' as truthy value
// // restaurant.numGuest = 0;
// // //(problem we are facing is coz 0 is falsy value acc to || and &&)
// // const guest = restaurant.numGuest || 69;
// // console.log(guest);
// // const guestAlt = restaurant.numGuest ?? 69;
// // console.log(guestAlt);
// // const guestAlt2 = 69 ?? restaurant.numGuest;
// // console.log(guestAlt2);
