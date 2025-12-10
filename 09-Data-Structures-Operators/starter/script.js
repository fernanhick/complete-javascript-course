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
};

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
