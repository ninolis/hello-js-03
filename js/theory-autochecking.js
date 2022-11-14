'use strict';

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 1/41  Status: Done

/*
** THEORY
Objects allow you to describe and group the characteristics of objects in the real world - a user, a book, a store product, whatever. Objects are also called dictionaries, that is, they contain terms (properties), and their definitions (values).

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};
The curly braces {} are used for the declaration - an object literal. When you create an object, you can add properties, each of which is described by key:value pairs. The key is also called the name of the property and it is always a string. The property value can be any type: primitives, arrays, objects, booleans, functions, etc. Properties are separated by commas.

** TASK
Assign to the variable apartment an object describing an apartment with the following characteristics:

imgUrl - photo, value "https://via.placeholder.com/640x480";
descr - description, meaning "Spacious apartment in the city center";
rating - rating, value 4;
price - price, value 2153;
tags - meta information, array ["premium", "promoted", "top"].

** Test
The variable apartment is declared
The value of the variable apartment is an object
The object has a property imgUrl
The value of the imgUrl property is a string "https://via.placeholder.com/640x480"
The object has a property descr
The value of the descr property is a string "Spacious apartment in the city center"
The object has a property rating
The value of the rating property is number 4
The object has a property price
The value of the price property is number 2153
The object has a property tags
The value of the tags property is an array ["premium", "promoted", "top"]

 */

// Javascript Editor:
// START
/*
const apartment = ;
*/

// Javascript Editor:
// FINISH
/*
'use strict';
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

console.log(apartment);
*/

// RESULT
/*
Result

Done
Assignment 1/41
The variable 'apartment' is declared
The value of the variable 'apartment' is an object
The object has a property 'imgUrl'
The value of the 'imgUrl' property is a string https://via.placeholder.com/640x480'
The object has a property 'descr'
The value of the 'descr' property is a string 'Spacious apartment in the city center'
The object has a property 'rating'
The value of the 'rating' property is number 4
The object has a property 'price'
The value of the 'price' property is number 2153
The object has a property 'tags'
The value of the 'tags' property is an array ['premium', 'promoted', 'top']

Result of code execution:
{
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: [ 'premium', 'promoted', 'top' ]
}

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 2/41  Status: Done

/*
** THEORY
The property value can be another object. This is used to store nested and grouped data.

For example, the statistics of a user of a social network consists of the number of followers, views and likes, and it is most convenient to store this data in the form of an object. The same is with the location, separate country and city.

In the future, this can be used to find users by country, city, minimum or maximum number of followers, etc.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

** TASK
Supplement the apartment object with the owner property, the value of which will be an object with information about the owner. Add the following properties to it:

name - owner's name, value "Henry";
phone - phone, value "982-126-1588";
email - mail, value "henry.carter@aptmail.com".

** Test
The variable apartment is declared
The value of the variable apartment is an object
The object of the variable apartment has properties imgUrl, descr, rating, price and tag with values
Object apartment has property owner
The value of the owner property is an object
The owner object has a name property
The value of the name property is "Henry"
The owner object has a phone property
The value of the phone property is "982-126-1588"
The owner object has an email property
The value of the email property is "henry.carter@aptmail.com"

 */

// Javascript Editor:
// START
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

*/

// Javascript Editor:
// FINISH
/*
'use strict';
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

console.log(apartment);
*/

// RESULT
/*
Result

Done

Assignment 2/41
The variable 'apartment' is declared
The value of the variable 'apartment' is an object
The object of the variable 'apartment' has the properties 'imgUrl', 'descr', 'rating', 'price' and 'tag' with values
The value of the property 'owner' is an object
The 'owner' object has a 'name' property. The value of the 'name' property is 'Henry'
The 'owner' object has a 'phone' property. The value of the 'phone' property is '982-126-1588'.
The 'owner' object has a 'email' property. The value of the 'email' property is 'henry.carter@aptmail.com'.

Result of code execution:
{
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: [ 'premium', 'promoted', 'top' ],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
}

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 3/41  Status: Done

/*
** THEORY
The first way to access a property of an object is with the syntax object.property_key. The dot syntax is used in most cases and is suitable when we know in advance the name (key) of the property we want to access.

The value of the property with the same name will be returned to the reference location.
If the object does not have a property with the same name, undefined will be returned to the reference location.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

** TASK
Supplement the code by assigning to the declared variables the expressions of the call to the corresponding properties of the apartment object.

aptRating - rating;
aptDescr - description;
aptPrice - price;
aptTags - tags.

** Test
The variable apartment is declared
The value of the variable apartment is an object
The object of the variable apartment has the properties imgUrl, descr, rating, price and tag with corresponding values
The variable aptRating is declared
The value of the variable aptRating is the number 4
The variable aptDescr is declared
The value of the variable aptDescr is a string "Spacious apartment in the city center"
The variable aptPrice is declared
The value of the variable aptPrice is the number 2153
The variable aptTags is declared
The value of the aptTags variable is an array of strings ["premium", "promoted", "top"]

 */

// Javascript Editor:
// START
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment;
const aptDescr = apartment;
const aptPrice = apartment;
const aptTags = apartment;
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line
console.log(aptRating, aptDescr, aptPrice, aptTags)

*/

// RESULT
/*
Result

Done

Assignment 3/41
The variable 'apartment' is declared
The variable 'apartment' value is an object
The variable object 'apartment' has properties 'imgUrl', 'descr', 'rating', 'price' and 'tag' with values.
The variable 'aptRating' is declared'
The value of the variable 'aptRating' is the number '4'.
The variable 'aptDescr' is declared
The value of the variable 'aptDescr' is the string 'Spacious apartment in the city center'.
The variable 'aptPrice' is declared
The value of the variable 'aptPrice' is 2153.
The variable 'aptTags' is declared
The value of the 'aptTags' variable is an array of strings `['premium', 'promoted', 'top'].

Result of code execution:
4 Spacious apartment in the city center 2153 [ 'premium', 'promoted', 'top' ]

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 4/41  Status: Done

/*
** THEORY
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};
To access attached properties, a dot chain is used. For example, if you need to get the value of the user's country, write user.location.country, where user.location is a reference (path) to the object in the location property, and user.locaton.country is a reference to the country property in this object. That is, a "dot" indicates the next nesting.

const location = user.location;
console.log(location); // location object

const country = user.location.country;
console.log(country); // "Jamaica"
If the property value is an array, then in our example user.hobbies is a call to this array. Further, you can access its elements through square brackets and index, or use properties and methods.

const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

** TASK
Supplement the code by assigning to the declared variables the expressions of the call to the corresponding properties of the apartment object.

ownerName - owner's name;
ownerPhone - owner's phone;
ownerEmail - owner's mail;
numberOfTags - the number of array elements in the tags property;
firstTag - the first element of the array in the tags property;
lastTag - the last element of the array in the tags property.

** Test
The variable apartment is declared with const
The value of the variable apartment is an object
The variable ownerName is declared with const
The value of the variable ownerName is the string "Henry"
The variable ownerPhone is declared with const
The value of the variable ownerPhone is "982-126-1588"
The variable ownerEmail is declared with const
The value of the ownerEmail variable is "henry.carter@aptmail.com"
The variable numberOfTags is declared with const
The value of the variable numberOfTags is 3
The variable firstTag is declared with const
The value of the variable firstTag is "premium"
The variable lastTag is declared with const
The value of the variable lastTag is "top"

 */

// Javascript Editor:
// START
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment;
const ownerPhone = apartment;
const ownerEmail = apartment;
const numberOfTags = apartment;
const firstTag = apartment;
const lastTag = apartment;
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
'use strict';
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

console.log(apartment);

// Change code below this line
const ownerName = apartment.owner.name; //'Henry';
const ownerPhone = apartment.owner.phone; //'982-126-1588';
const ownerEmail = apartment.owner.email; //'henry.carter@aptmail.com';
const numberOfTags = apartment.tags.length; //3;
const firstTag = apartment.tags[0]; //'premium';
const lastTag = apartment.tags[numberOfTags - 1]; //'top';

console.log(ownerName, ownerPhone, ownerEmail, numberOfTags, firstTag, lastTag);
console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag);
*/

// RESULT
/*
Result

Done

Assignment 4/41
The variable 'apartment' is declared with 'const'
The variable 'ownerName' is declared with 'const'
The variable 'ownerPhone' is declared with 'const'
The variable 'ownerEmail' is declared with 'const'
The variable 'numberOfTags' is declared with 'const'
The variable 'firstTag' is declared with 'const'
The variable 'lastTag' is declared with 'const'
The variable `ownerName` value is a string 'Henry'
The variable `ownerPhone` value is a string '982-126-1588'
The variable `ownerEmail` value is a string 'henry.carter@aptmail.com'
The variable `numberOfTags` value is number 3
The variable `firstTag` value is a string 'premium'
The variable `lastTag` value is a string 'top'

Result of code execution:
Henry
982-126-1588
henry.carter@aptmail.com
3
premium
top

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 5/41  Status: Done

/*
** THEORY
The second way to access a property of an object is with the syntax `object["property_key]". It looks like referring to an array element, with the difference that the information in the square brackets and quotation marks indicate not the element's index, but the property name as a string.

The "square brackets" syntax is used much less frequently. As a rule, in cases when the name of a property is not known in advance, or it is stored in a variable (as the value of a function parameter, for example)

The value of the property with the same name will be returned to the reference location.
If the object does not have a property with the same name, undefined will be returned to the reference location.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book["genres"];
console.log(bookGenres); // ["historical prose", "adventure"]

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // "Bernard Cornwell"

** TASK
Complete the code by assigning to the declared variables the expressions for accessing the corresponding properties of the apartment object using the "square brackets" syntax.

aptRating - rating;
aptDescr - description;
aptPrice - price;
aptTags - tags.

** Test
The variable apartment is declared
The value of the variable apartment is an object
The variable aptRating is declared
The value of the variable aptRating is 4
The variable aptDescr is declared
The value of the variable aptDescr is "Spacious apartment in the city center"
The variable aptPrice is declared
The value of the variable aptPrice is 2153
The variable aptTags is declared
The value of the aptTags variable is ["premium", "promoted", "top"]

 */

// Javascript Editor:
// START
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment;
const aptDescr = apartment;
const aptPrice = apartment;
const aptTags = apartment;
// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Change code below this line
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

// RESULT
/*
Result

Done

Assignment 5/41
The variable 'apartment' is declared with 'const'
The variable 'aptRating' is declared with 'const'
The variable 'aptDescr' is declared with 'const'
The variable 'aptPrice' is declared with 'const'
The variable 'aptTags' с is declared with 'const'
The `aptRating` variable must use square brackets syntax while assigning a value
The value of the `aptRating` variable is 4
The `aptDescr` variable must use square brackets syntax while assigning a value
The value of the variable `aptDescr` is the string 'Spacious apartment in the city center'
The `aptPrice` variable must use square brackets syntax while assigning a value
The value of the variable `aptPrice` is 2153
The `aptTags` variable must use square brackets syntax while assigning a value
The value of the `aptTags` variable is an array ['premium', 'promoted', 'top']
Result of code execution:
4
Spacious apartment in the city center
2153
[ 'premium', 'promoted', 'top' ]

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 6/41  Status: Done

/*
** THEORY
After the object is created, the value of its properties can be changed. To do this, you need to refer to them by name, for example, via a dot, and assign a new value.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]

** TASK
Complete the code by updating the property values ​​of the apartment object:

Update the price in the price property to 5000;
update the apartment rating in the rating property to 4.7;
Update the name of the owner in the attached property name to "Henry Sibola";
Update the array of tags in the tags property by adding the "trusted" string to the end.

** Test
The variable apartment is declared
The value of the variable apartment is an object
The value of the attached property price is the number 5000
The value of the attached property rating is the number 4.7
The value of the attached property name is the string "Henry Sibola"
The value of the attached property tags is the array ["premium", "promoted", "top", "trusted"]

 */

// Javascript Editor:
// START
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
apartment.price = 5000;
apartment.owner.name = 'Henry Sibola';
apartment.rating = 4.7;
apartment.tags.push('trusted');

console.table(apartment);
console.log(apartment);

*/

// RESULT
/*
Result

Done

Assignment 6/41
The variable 'apartment' is declared with 'const'
The value of the variable 'apartment' is an object
The value of the attached property 'price' is 5000
The value of the 'rating' attached property is 4.7
The value of the attached property 'name' is a string 'Henry Sibola'
The value of the attached property 'tags' is an array ['premium', 'promoted', 'top', 'trusted']

Result of code execution:
{
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: [ 'premium', 'promoted', 'top', 'trusted' ],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
}

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 7/41  Status: Done

/*
** THEORY
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]

** TASK
Add a few new properties to the apartment object:

area - area in square meters, number 60;
rooms - number of rooms, number 3;
location - the location of the apartment, the object with the following nested properties;
country - country, string "Jamaica";
city - city, string "Kingston".

** Test
The variable apartment is declared
The value of the variable apartment is an object
The value of the attached property area is 60
The value of the attached property rooms is 3
The value of the attached property location is an object
The value of the attached property location.country is the string "Jamaica"
The value of the attached property location.city is the string "Kingston"

 */

// Javascript Editor:
// START
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Jamaica';
apartment.location.city = 'Kingston';

console.table(apartment);
console.log(apartment);
apartment;
*/

// RESULT
/*
Result

Done

Assignment 7/41
The variable 'apartment' is declared with 'const'
The value of the variable 'apartment' is an object
The value of the 'area' attached property is number
The value of the attached property 'rooms' is number 3
The value of the attached property 'location' is an object
The value of the attached property 'location.country' is a string 'Jamaica'
he value of the attached property 'location.city' is a string 'Kingston'

Result of code execution:
{
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: [ 'premium', 'promoted', 'top', 'trusted' ],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  },
  area: 60,
  rooms: 3,
  location: { 
    country: 'Jamaica', 
    city: 'Kingston' }
}

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 8/41  Status: Done

/*
** THEORY
Sometimes, when creating an object, the property value must be taken from a variable or function parameter with the same name as the property itself.

The syntax in the following example is too huge, because you have to duplicate the name of the property, and the name of the variable that stores the required value.

const name = "Henry Cibola";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Henry Cibola"
console.log(user.age); // 25
Shorthand properties solve this problem by allowing a variable name to be used as a property name and its value as a property value.

const name = "Henry Cibola";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Cibola"
console.log(user.age); // 25
That is, when declaring an object, it is enough to specify only the name of the property, and the value will be taken from a variable with the same name.

** TASK
Complete the object declaration code so that it has properties name, price, image and tags with values ​​from variables with similar names. Be sure to use shorthand properties.

** Test
The variable product is declared
The value of the variable product is an object
The value of the attached property name is the string "Repair Droid"
The value of the attached property price is the number 2500
The value of the attached property image is the string "https://via.placeholder.com/640x480"
The value of the attached property tags is the array ["on sale", "trending", "best buy"]

 */

// Javascript Editor:
// START
/*
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line

  // Change code above this line
};
product;
console.table(product);
console.log(product);
*/

// Javascript Editor:
// FINISH
/*
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags
  // Change code above this line
};

*/

// RESULT
/*
Result

Done

Assignment 8/41
The variable 'product' is declared with 'const'
The value of the variable 'product' is an object
Attached property 'name' assigned using short syntax
The value of the 'name' attached property is the string 'Repair Droid'
Attached property 'price' assigned using short syntax
The value of the 'price' attached property is 2500
Attached property 'image' assigned using short syntax
The value of the attached property 'image' is the string 'https://via.placeholder.com/640x480'
Attached property 'tags' assigned using short syntax
The value of the 'tags' attached property is an array ['on sale', 'trending', 'best buy']

Result of code execution:
{
  name: 'Repair Droid',
  price: 2500,
  image: 'https://via.placeholder.com/640x480',
  tags: [ 'on sale', 'trending', 'best buy' ]
}
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 9/41  Status: Done

/*
** THEORY
There are situations when, while declaring an object, it is necessary to add a property with a name that we do not know in advance, because it is stored as the value of a variable or as a result of a function.

Previously, for this it was necessary to first create an object, and then add properties via square brackets, which is not very convenient.

const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Henry Cibola";
console.log(user.name); // "Henry Cibola""
The computed properties syntax helps you avoid unnecessary code and, in some cases, simplify it. The value of a computed property can be any valid expression.

const propName = "name";
const user = {
  age: 25,
  // The name of this property will be taken from the value of the propName variable
  [propName]: "Henry Cibola",
};

console.log(user.name); // "Henry Cibola"

** TASK
Complete the code for declaring the object credentials so that as a result it has two properties: email and password, the names of which are stored in the variables emailInputName and passwordInputName.

The value of the email property should be the string "henry.carter@aptmail.com", and the value of the password property should be the string "jqueryismyjam".

** Test
The variable credentials is declared
The value of the credentials variable is an object
The credentials object has a email property
The value of the attached property email is the string "henry.carter@aptmail.com"
The credentials object has a password property
The value of the attached property password is the string "jqueryismyjam"

 */

// Javascript Editor:
// START
/*
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line

  // Change code above this line
};
*/

// Javascript Editor:
// FINISH
/*
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam"
  // Change code above this line
};

credentials;
console.table(credentials);
console.log(credentials);
*/

// RESULT
/*
Result

Done

Assignment 9/41
The variable 'credentials' is declared with
The value of the 'credentials' variable is an object
The 'credentials' object has a 'email' property
The value of the attached property 'name' is the string 'henry.carter@aptmail.com'
The 'credentials' object has a 'password' property
The value of the attached property 'password' is the string 'jqueryismyjam'

Result of code execution:
{ 
  email: 'henry.carter@aptmail.com', 
  password: 'jqueryismyjam' 
}

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 10/41  Status: Done

/*
** THEORY
Unlike an array or a string, an object is not an iterable entity, that is, it cannot be iterated over with for or for...of loops. To iterate over objects, a special for...in loop is used, which iterates over the keys of the object object.

for (key in object) {
  // instructions
}
The variable key is available only in the body of the loop. At each iteration, the value of the key (name) of the property will be written to it. To get the value of a property with such a key (name), use the square brackets syntax.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Key
  console.log(key);
  // The value of the property with this key
  console.log(book[key]);
}

** TASK
Iterate over the apartment object using the for...in loop and write all its keys to the keys array, and all its property values ​​to the values ​​array.

** Test
The variable apartment is declared
The value of the variable apartment is an object
The variable keys is declared
The value of the variable keys is the array ["descr", "rating", "price"]
The variable values is declared
The value of the variable values is the array ["Spacious apartment in the city center", 4, 2153]

 */

// Javascript Editor:
// START
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

*/

// Javascript Editor:
// FINISH
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment) {
  keys.push(key)
  values.push(apartment[key])
}
console.log(keys);
console.log(values);
*/

// RESULT
/*
Result

Done

Assignment 10/41
The variable 'apartment' is declared
The value of the variable 'apartment' is an object
The variable 'keys' is declared
The value of the variable 'keys' is an array ['descr', 'rating', 'price']
The variable 'values' is declared
The value of the variable 'values' is an array ['Spacious apartment in the city center', 4, 2153]
The 'for...in' loop is used

Result of code execution:
[ 'descr', 'rating', 'price' ]
[ 'Spacious apartment in the city center', 4, 2153 ]

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 11/41  Status: Done

/*
** THEORY
Let's analyze the concept of own and inherited properties of an object and learn how to use the for...in loop correctly.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4
The Object.create(animal) method creates and returns a new object, binding it to the animal object. Therefore, you can get the value of the legs property by referring to it as dog.legs, even though it is not in the dog object - it is not an own property from the animal object.

The in operator, which is used in a for...in loop, does not distinguish between own and inherited properties of an object. This feature gets in the way, since we only want to iterate over own properties. To find out whether an object has an own property or not, use the hasOwnProperty(key) method, which returns true or false.

// ❌ Returns true for all properties
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Returns true only for own properties
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
Therefore, when iterating over with a for...in loop, it is necessary to add a check for own properties at each iteration. Even if now we are sure that the object has no inherited properties, this will protect against possible mistakes in the future.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // If this is an own property, execute the if body
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // If this is not an own property, do nothing
}

** TASK
Refactor the solution to the previous task by adding a check for the own property to the for...in loop.

** Test
The variable advert is declared.
The value of the advert variable is an object.
The variable apartment is declared.
The value of the variable apartment is an object.
The variable keys is declared.
The value of the variable keys is the array ["descr", "rating", "price"].
The variable values is declared.
The value of the variable values is the array ["Spacious apartment in the city center", 4, 2153].

 */

// Javascript Editor:
// START
/*
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line

  keys.push(key);
  values.push(apartment[key]);

  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line

  keys.push(key);
  values.push(apartment[key]);

  // Change code above this line
}

*/

// RESULT
/*


*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 12/41  Status: Done

/*
** THEORY


** TASK


** Test


 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*

*/

// RESULT
/*


*/
