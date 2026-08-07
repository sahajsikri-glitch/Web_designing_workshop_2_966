// "Use strict";
// //destructing arrays :
// //why it is used? => to help developers extract multiple properties from objects at once.

const weekdays2 = ["mon", "tue", "wed", "thur", "fri", "sat"];
const openingHours = {
  //ES6 OBJECT LITERAL 03 (can acees array el in objects eg- weekends[2])
  [weekdays2[3]]: {
    //babuni see this
    open: 12,
    close: 22,
  },
  [weekdays2[4]]: {
    //babuni see this
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
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

  //ES6 ENHANCED OBJECT LITERAL01
  openingHours, //dont have to write openinghours:openinghours anymore

  //ES6 ENHANCED OBJECT LITERAL02 (dont have to use func declaration or expr just order() thats it!!)
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
// console.log(3 || "sahej");
// // console.log('' || 'sahej');
// // console.log(true || 0);
// console.log(undefined || null); //bas phela check krunga uske baad jo bhi h idc
// console.log(null || undefined);

// //way-01
// const guest1 = restaurant.numGUest ? restaurant.numGuest : 10;
// console.log(guest1);

// //way-02(just observe how fast and time saving thing thsis is)
// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

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

//LOGICAL ASSIGNMENT OPERATOR
const res1 = {
  name: "la pilaaz",
  nameGuests: 0,
};
const res2 = {
  name: "dominoz",
  owner: "jethalal",
};
rest1.numGuest = rest1.numGUest || 10;
rest2.numGuest ||= 10;

rest1.numGUest ??= 10;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//LOOPING ARRAYS-: THE FOR-OF LOOP
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//basic
const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu3) console.log(item);

//FOR ITEMS
for (const item of menu3) {
  console.log(item);
}
//FOR INDEXES OF ITEM(IN ARRAY)
for (const item of menu3.entries()) console.log(item);
//FOR BOTH ITEMS AND INDEXES(SEPERATELY)
for (const [i, el] of menu3.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//ENHANCED OBJECT LITERALS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//1)shorthand prop names
console.log(restaurant.openingHours);
// uppar dehle lawde ke nati

//2)shorthand method definitions
// basically functions ko alg trike se likhne wala uppar dekhle

//3)computed property names
//uppar jake dekho bacha kaishe pela dia h (weekdays2) ko

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//OPTIONAL CHANGING(?.)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//BASIC
console.log(restaurant.openingHours.mon); //UNDEFINED
// console.log(restaurant.openingHours.mon.open); //ERROR(coz undefined ke sath operation mtlb ERROR)

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
} //NOTHING
if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
} //11

// WITHOUT OPTIONAL CHAINING
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
if (restaurant.openingHours && restaurant.openingHours.sat) {
  console.log(restaurant.openingHours.sat.open);
}
// console.log(restaurant.openingHours.mon.open); //ERROR

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); //UNDEFINED/NULL(Asking if monday is here)

//EXAMPLE
const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
for (item of days) {
  console.log(item);
  const open = restaurant.openingHours[item]?.open ?? "closed";
  console.log(`ON DAY ${item}, WE OPEN AT ${open}`);
}

//METHODS
console.log(restaurant.orderRisotto?.(0, 1) ?? "METHOD DOESNT EXIST");
console.log(restaurant.order?.(0, 1) ?? "METHOD DOESNT EXIST");

//ARRAYS
const users = [{ name: "Sahej", email: "Sahajsikri@gmail.com" }];
// const users = [];
console.log(users[0]?.name ?? "USER ARRAY EMPTY"); //see how ? and ?? working together
//iska matlab in if else statement is
if (users.length > 0) console.log(users[0].name);
else {
  console.log("USER ARRAY EMPTY");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//LOOPING OBJECTS: OBJ KEYS , VALUES , ENTERIES
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//OBJ KEYS(prop name)
for (const item of Object.keys(openingHours)) {
  console.log(item);
}
const prop = Object.keys(openingHours);
console.log(prop);
console.log(`we are open at ${prop.length} days`);

//OBJ VALUES(prop values)
const values = Object.values(openingHours);
console.log(values); //ANDAR KA MAAL DEDIA

//OBJ ENTRIES(prop entries)
const entries = Object.entries(openingHours);
console.log(entries);

// for (const x of entries) {
//   console.log(x);
// }

for (const [key, { open, close }] of entries) {
  //to use openinghour enteries you have to define like object.enteries
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//SETS(iterable)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//basics
const orderSet = new Set(["pasta", "risotto", "pizza", "pasta", "pizza"]);
console.log(orderSet);
console.log([...orderSet]);
console.log(...orderSet);

//letter spcaing
console.log(new Set("sahej"));
console.log(new Set("sahej").size);
//operations
console.log(orderSet.size);
console.log(orderSet.has("pizza")); //true
console.log(orderSet.add("oats"));
console.log(orderSet.delete("pasta"));
console.log(orderSet);
// console.log(orderSet.clear());//(UNDEFINED-OUTPUT) and ye pura set khaali krdega
for (const order of orderSet) {
  console.log(order);
}

//example(different positions in restaurant)//remove duplicates
const staff = ["waiter", "chef", "waiter", "manager", "chef"];
//ARRAY TO SET
const staffSet = [...new Set(staff)];
console.log(staffSet);

//New Operations to Make Sets Useful!
const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

//intersection
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods); //give output in objects
//sets to array
console.log([...commonFoods]);

//union
const union = italianFoods.union(mexicanFoods);
console.log(union);

//difference(A-B OR B-A)
const difference = italianFoods.difference(mexicanFoods);
// const difference = mexicanFoods.difference(italianFoods);
console.log(difference);

//symmetric difference(give A + B but not A-common-B)
const symmDifference = italianFoods.symmetricDifference(mexicanFoods);
console.log(symmDifference);

//Disjoint
console.log(italianFoods.isDisjointFrom(mexicanFoods)); //give boolean value

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//MAPS(key-value pair)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const rest = new Map();
rest.set("name", "tazaBazar");
rest.set(1, "france,itlay");

rest
  .set("categories", ["Italian", "Chinese", "Organic"])
  .set("open", 11)
  .set("close", 20)
  .set(true, "We are open :)")
  .set(false, "We are close :(");

// to read data from the map (get())
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 7;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//has()
rest.has("categories");
//delete
rest.delete(2);
//rest.clear();
//size;
rest.size;

rest.set([1, 2], "test");
rest.get([1, 2]); //undefined
//better way to use array in maps :
const arr = [1, 2];
console.log(rest.set(arr));

//dom manupilation
rest.set(document.querySelector("h1"), "heading");

//Maps :Iteration
const question = new Map();
question
  .set("question", "best programming language in th world?")
  .set(1, "C++")
  .set(2, "Java")
  .set(3, "Java-script")
  .set("correct", 3)
  .set(true, "correct 🚀")
  .set(false, "try again ");

console.log(question);

//convert object to maps :
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app
// console.log(question.get());
for (const [key, values] of question) {
  if (typeof key === "number") {
    console.log(`${key}: ${values}`);
  }
}
const answer = Number(prompt("Your answer?"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

//converting maps to arrays:
console.log([...question]);
console.log([...question.keys()]);
console.lof([...question.entries()]);

//WHICH DATASTRUCTURE TO USE ?

// DATA STRUCTURES OVERVIEW
// ========================
// SOURCES OF DATA
// ---------------
// 1. From the program itself: Data written directly in source code (e.g. status messages)
// 2. From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
// 3. From external sources: Data fetched for example from web API (e.g. recipe objects)
//    └─ Application Programming Interface
//                 |
//                 v
//         Collection of data
//                 |
//                 v
//           Data structure
//            /          \
//           /            \
//          /              \
//  SIMPLE LIST?      KEY/VALUE PAIRS?
//         |                  |
//         v                  v
//  Arrays or Sets      Objects or Maps

// maps-> object alternative
// use whatever youre comfortable with!

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//STRINGS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Part -01
const airplane = "Tap Air India";
console.log(airplane[0]);
console.log(airplane[7]);
console.log(airplane.length);
console.log(airplane.indexOf("r"));
console.log(airplane.lastIndexOf("r"));

console.log(airplane.slice(4));
console.log(airplane.slice(4, 7));
console.log(airplane.slice(0, airplane.indexOf(" ")));
console.log(airplane.slice(-2));
console.log(airplane.slice(-1, 1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s == "B" || s == "E") {
    console.log("nobody want this seat");
  } else {
    console.log("you got lucky");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("12A");

//Part-01 :
console.log(airplane.toUpperCase());

//Check / comparing E-MAIL :
const email = "hello@world";
const loginEmail = "   Hello@WOrld";
//1st way
const lowerEmail = loginEmail.toLowerCase();
const trimmerEmail = lowerEmail.trim(); //remove spaces
console.log(trimmerEmail);

//2nd way
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//trimEnd / trimStart - used to trim only white spaces from the end or start

//replacing :
const priceUS = "288.97$";
const priceIND = priceUS.replace("$", "rs").replace(".", ",");
console.log(priceIND);

//replace 1 word occuring multicple times
const announcement = "hello hello hello hi woowow";
const replaceAnnouncement = announcement.replaceAll("hello", "bye");

//Booleans:
const plane = "A320neo";
console.log(plane.includes("A32"));

if (plane.startsWith("A3") && plane.endsWith("neo")) {
  console.log("bhery good");
}

//practice exercise :
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("NOT ALLOWED!!");
  } else {
    console.log("allowed");
  }
};

checkBaggage("I BROUGHT SOME FOOD AND KNIFE WITH ME ");
checkBaggage("i only have my clothes with me nothing else");
checkBaggage("i've a gun to protect me");

//working with strings-Part-03:
console.log("a+very+nice").split("+");
const [firstNamu, larNamu] = "Sahaj Sikri".split(" ");
const newName = ["Mr.", firstNamu, larNamu.toUpperCase()].join();

//Caapitialize name :
// function capitializeName(naam) {
//   const naam = naam.split();
// }
// /
// /
// /
// /

//padding :
const message = "Go to gate 23";
console.log(message.padStart(25, "+")); //lenght of entire string should be 25
console.log("jonas".padStart(25, "+"));

//Hiding digits :
const maskCreditCard = function (number) {
  // const str = string(number);
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(last.length, "*");
};
maskCreditCard(2873873289739);
maskCreditCard("293982932327837874");

//repeat
