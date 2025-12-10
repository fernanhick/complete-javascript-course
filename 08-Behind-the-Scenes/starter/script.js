'use strict';

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
/// this is using a reference of the object and it is mutate in the heap reference
function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica, 'Davis');

console.log('Before:', jessica);
console.log('After:', marriedJessica);

///Create a new object using the reference of an object

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

///Shallow copy
///The spread operator is used for copying the object into a new object
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jhon');

// Even tho the object has been copied, the object inside the copied object holds the same reference
//Meaning that the family will be added to the new object and referenced object
console.log('Before:', jessica2);
console.log('After:', jessicaCopy);

///Deep Clone
const jessicaClone = structuredClone(jessica);

jessicaClone.family.push('Juan');
jessicaClone.family.push('Carlos');

console.log('Before:', jessica);
console.log('After:', jessicaClone);
