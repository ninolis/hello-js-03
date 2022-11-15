'use strict';

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// // To iterate over such an array, the standard for...of loop is used. The values ​​of the properties of each object can be obtained using the "dot" syntax, since in each object the set of properties and their names will be the same, only the values ​​differ.

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);

// console.log(rgbColors);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const salary of values) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({}); // returns 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // returns 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // returns 400

// console.log(countTotalSalary({})); // returns 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // returns 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // returns 400

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// countProps({}); // returns 0
// countProps({ name: 'Mango', age: 2 }); // returns 2
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // returns 3

// console.log(countProps({})); // returns 0
// console.log(countProps({ name: 'Mango', age: 2 })); // returns 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // returns 3

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   // if (apartment.hasOwnProperty(key)) {
//   values.push(apartment[key]);
//   // }
// }

// console.log(keys);
// console.log(values);
// console.table(apartment);

// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// countProps({}); // returns 0
// countProps({ name: 'Mango', age: 2 }); // returns 2
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // returns 3

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };

// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// console.log(apartment.service);
// console.log(apartment);
// console.table(apartment);

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }
// keys;
// values;
// console.log(keys);
// console.log(values);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// console.table(apartment);
// console.log(apartment);
// apartment;
/*

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.owner.name = 'Henry Sibola';
// apartment.rating = 4.7;
// apartment.tags.push('trusted');

// console.table(apartment);
// console.log(apartment);
/*
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Change code below this line
apartment.price = 5000;
apartment.owner.name = 'Henry Sibola';
apartment.rating = 4.7;
apartment.tags.push('trusted');

const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line
console.log(aptRating);
console.log(aptDescr);
console.log(aptPrice);
console.log(aptTags);

*/
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// console.log(apartment);

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone; //'982-126-1588';
// const ownerEmail = apartment.owner.email; //'henry.carter@aptmail.com';
// const numberOfTags = apartment.tags.length; //3;
// const firstTag = apartment.tags[0]; //'premium';
// const lastTag = apartment.tags[numberOfTags - 1]; //'top';

// console.log(ownerName, ownerPhone, ownerEmail, numberOfTags, firstTag, lastTag);
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// Change code above this line
// console.log(aptRating, aptDescr, aptPrice, aptTags);

// function includes(array, value) {
//   let result;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// }

// return isMember ? '$2.00' : '$10.00';

// console.log(includes([1, 2, 3, 4, 5], 3)); // returns true
// console.log(includes([1, 2, 3, 4, 5], 17)); // returns false
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
// ); // returns true
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
// ); // returns false
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum')); // returns true
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')); // returns false

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return (number = i);
//     }
//   }
// }

// console.log(findNumber(2, 6, 5)); // returns 5
// console.log(findNumber(8, 17, 3)); // returns 9
// console.log(findNumber(6, 9, 4)); // returns 8
// console.log(findNumber(16, 35, 7)); // returns 21

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = []; // Array to contain evenNumbers elements

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i); // Push to evenNumbers array
//     }
//   }
//   return evenNumbers;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5)); // returns [2, 4]
// console.log(getEvenNumbers(3, 11)); // returns [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // returns [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // returns [8]
// console.log(getEvenNumbers(7, 7)); // returns []

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //returns [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //returns [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //returns []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //returns [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //returns [24, 41, 76]

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const price of order) {
//     total += price;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // call returns 138
// console.log(calculateTotalPrice([164, 48, 291])); // call returns 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // call returns 1116
// console.log(calculateTotalPrice([])); // call returns 0

// Function to return commonElements
// function getCommonElements(array1, array2) {
//   const common = []; // Array to contain common elements

//   for (let i = 0; i < array1.length; i += 1) {
//     for (let j = 0; j < array2.length; j += 1) {
//       if (array1[i] === array2[j]) {
//         // If element is in both the arrays
//         common.push(array1[i]); // Push to common array
//       }
//     }
//   }

//   return common; // Return the common elements
// }

// function getCommonElements(array1, array2) {
//   const common = []; // Array to contain common elements

//   for (const el of array1) {
//     if (array2.includes(el)) {
//       common.push(el);
//     }
//   }
//   return common; // Return the common elements
// }

// var arr1 = [45, 99, 55, 223, 17, 93, 23];
// var arr2 = [45, 18, 93, 7, 23, 1, 223, 5];

// Get common elements of arr1, arr2
// var commonElements = getCommon(arr1, arr2); // [45, 223, 93, 23]

// The function getCommonElements(array1, array2) is declared
// console.log(getCommonElements([1, 2, 3], [2, 4])); // returns [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // returns [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // returns [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // returns [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // returns []
// The function getCommonElements() called with two random arrays returns the correct array
// The includes and push methods were used in the for loop

// console.log(checkFruit('plum')); // returns true
// console.log(checkFruit('mandarin')); // returns false
// console.log(checkFruit('pear')); // returns true
// console.log(checkFruit('Pear')); // returns false
// console.log(checkFruit('apple')); // returns true

// console.log(planets.includes("Earth")); // true
