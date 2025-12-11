'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta order with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIgredient, ...otherIngredients) {
    console.log(
      `Heres is your pizza with ${mainIgredient} and ${otherIngredients}`
    );
  },
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
/////////FOR OF Loop/////////
for (const item of menu) {
  console.log(item);
}

/* const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La pizzaaer',
  owner: 'Gio',
};
 */
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//This is same same using the OR operator
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;
//This is using the nullis assignment operator
//rest1.numGuests ??= 10;
//rest2.numGuests ??= 10;

//AND assignment operator
//rest2.owner = rest2.owner && '<ANONYMOUS>';
//rest1.owner = rest1.owner && '<ANONYMOUS>';

//rest2.owner &&= '<ANONYMOUS>';
//rest1.owner &&= '<ANONYMOUS>';

//console.log(rest1);
//console.log(rest2);

/* restaurant.orderPizza('mushroom', 'tomatoes', 'pepperoni');

//REST Pattern  ==>> Pack elements into an array Rest element should be always at the end
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
//Objects
//Example will create a variable for saturday and the rest of the information added to the variable weekdays
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};

add(2, 3);
add(2, 3, 6, 2, 4);
add(2, 3, 6, 4, 32);
const x = [4, 5, 6];
add(...x); */

/* const ingredients = [
  prompt("Let's make pasta, ingredient 1?"),
  prompt('ingredient 2'),
  prompt('ingredient 3'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Gio' };
console.log(newRestaurant);
console.log(restaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'El Pozuelo';
console.log(restaurant);
console.log(restaurantCopy);
 */

/* SPREAD OPERATOR
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
newArr.push(4);
console.log(newArr); //Print as an array
console.log(...newArr); // Print individually

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
*/
/* COPY ARRAY 
const mainMenuCopy = [...restaurant.mainMenu];

// JOIN 2 ARRAS 
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// ITERABLES: arrays, string, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...letters);

/* 
restaurant.orderDelivery({
  time: '22:30',
  address: 'Plaza Mayor',
  mainIndex: 2,
  starterIndex: 1,
});

//Destructuring the object with their assigned variable name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//When using third party data, it is useful to assign names to the variables as well as setting default values in case the property doesnt exist
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);
//Default values
const { menu = [], starterMenu: starter = [] } = restaurant;

// Mutating Variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 245 };
/// We are unable to destructure using the values a and b as these are already declared, but can be destructured wrapping the object in parenthesis
({ a, b } = obj); /// Override the initial variables
console.log(a, b);

//Destructuring Nested Object
const {
  fri: { open, close },
} = openingHours;
console.log('Friday:', open, close);

//Same example but assigning a variable to the destructured value
const {
  fri: { open: o, close: c },
} = openingHours;
console.log('Friday:', o, c);
 */
/* 
//Array destructuring, when destructuring and array the original array is not mutated
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
//This will destructure and skip the second value
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
//this will change the position of the values
[main, secondary] = [secondary, main];

//Execute order function from object restaurant
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring nested values
const nested = [2, 4, [5, 6]];
//This will destructure the initial array but display the inner array
const [i, , j] = nested;
const [l, , [m, n]] = nested;
console.log(l, m, n);

//Default values
//This will assign a value to the variable if the destructuring does not contain the same amount of value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */
