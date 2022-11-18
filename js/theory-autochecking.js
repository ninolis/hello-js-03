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
if (apartment.hasOwnProperty(key))
  {keys.push(key);
  values.push(apartment[key]);}

  // Change code above this line
}

console.log(keys);
console.log(values);
console.table(apartment);

*/

// RESULT
/*
Result

Done

Assignment 11/41
The variable 'advert' is declared
The value of the 'advert' variable is an object
The variable 'apartment' is declared
The value of the variable 'apartment' is an object
The variable 'keys' is declared
The value of the variable 'keys' is an array ['descr', 'rating', 'price']
The variable 'values' is declared
The value of the variable 'values' is an array ['descr', 'rating', 'price']
The 'for ... in' loop is used
Inside the 'for...in' loop, use the 'if' to check the own properties of the 'apartment' object

Result of code execution:
[ 'descr', 'rating', 'price' ]
[ 'Spacious apartment in the city center', 4, 2153 ]

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 12/41  Status: Done

/*
** THEORY
TASK: COUNTING PROPERTIES

** TASK
Write a function countProps(object), that counts and returns the number of an object's own properties in the object parameter. Use the variable propCount to store the number of properties of the object.

** Test
The function countProps(object) is declared
The call countProps({}) returns 0
The call countProps({ name: "Mango", age: 2 }) returns 2
The call countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) returns 3
The function only counts the object's own properties

 */

// Javascript Editor:
// START
/*
function countProps(object) {
  let propCount = 0;
  // Change code below this line

  // Change code above this line
  return propCount;
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

function countProps(object) {
  let propCount = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

countProps({}); // returns 0
countProps({ name: 'Mango', age: 2 }); // returns 2
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // returns 3

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

*/

// RESULT
/*
Result

Done

Assignment 12/41
The countProps(object) function is declared
The call countProps({}) returns 0
The call countProps({ name: 'Mango', age: 2 }) returns 2
The call countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }}) returns 3
The function only counts the object's own properties
Result of code execution:
0
2
3

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 13/41  Status: Done

/*
** THEORY
The built-in class Object has several useful methods for working with objects. The first is Object.keys(obj), which takes an object and returns an array of its own property keys. If the object has no properties, the method will return an empty array.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
By combining the result of Object.keys() and the for...of loop, you can conveniently iterate over the object's own properties without resorting to using the archaic for...in loop with property ownership checks.

const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Key
  console.log(key);
  // Property value
  console.log(book[key]);
}
We iterate over an array of object keys and, at each iteration, get the value of a property with such a key.

** TASK
Iterate over the apartment object using the Object.keys() method and the for...of loop. Assign to the variable keys the array of the keys of the own properties of the object apartment, and add all the values ​​of its properties to the array values.

** Test
The variable apartment is declared.
The value of the variable apartment is an object.
The variable keys is declared.
The value of the variable keys is the array ["descr", "rating", "price"].
The value of the variable keys was obtained using the method Object.keys().
The variable values is declared.
The value of the variable values is the array ["Spacious apartment in the city center", 4, 2153].
The value of the values variable is obtained using the for...of loop.

 */

// Javascript Editor:
// START
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = apartment;

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  // if (apartment.hasOwnProperty(key)) {
    values.push(apartment[key]);
  // }
}

console.log(keys);
console.log(values);
console.table(apartment);
*/

// RESULT
/*
Result

Done

Assignment 13/41
The variable 'apartment' is declared
The value of the variable 'apartment' is an object
The variable 'keys' is declared
The value of the variable 'keys' is an array ['descr', 'rating', 'price']
The value of the 'keys' variable was obtained using the Object.keys() method
The variable 'values' is declared
The value of the variable 'values' is an array ['Spacious apartment in the city center', 4, 2153]
The value of the variable 'values' was obtained using the loop `for...of
Result of code execution:
[ 'descr', 'rating', 'price' ]
[ 'Spacious apartment in the city center', 4, 2153 ]

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 14/41  Status: Done

/*
** THEORY
TASK. COUNTING PROPERTIES 2.0

** TASK
Refactor the countProps(object) function using the Object.keys() method and optionally a for...of loop.

** Test
The function countProps(object) is declared
The call countProps({}) returns 0
The call countProps({ name: "Mango", age: 2 }) returns 2
The call countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) returns 3
The function only counts the object's own properties
The function uses the Object.keys() method and, possibly, the for...of loop

 */

// Javascript Editor:
// START
/*
function countProps(object) {
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
function countProps(object) {

  let propCount = 0;
  const keys = Object.keys(object);
  
  for (const key of keys) {
    propCount += 1;
  }

  return propCount;
}

countProps({}); // returns 0
countProps({ name: 'Mango', age: 2 }); // returns 2
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // returns 3

console.log(countProps({})); // returns 0
console.log(countProps({ name: 'Mango', age: 2 })); // returns 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // returns 3
*/

// RESULT
/*
Result

Done

Assignment 14/41
The countProps(object) function is declared
The call countProps({}) returns 0
The call countProps({ name: 'Mango', age: 2 }) returns 2
The call countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }}) returns 3
The function only counts the object's own properties
The function uses the Object.keys() method and possibly a 'for...of' loop

Result of code execution:
0
2
3

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 15/41  Status: Done

/*
** THEORY
If the Object.keys(obj) method returns an array of the object's own property keys, then the Object.values(obj) method returns an array of its own property values. If the object has no properties, the Object.values(obj) method will return an empty array.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
The array of property values ​​can also be iterated over with a for...of loop, for example, to get the total sum of numeric values.

** TASK
Write to the variable keys an array of the keys of the own properties of the object apartment, and to the variable values an array of all the values ​​of its properties. Use the methods Object.keys() and Object.values​​().

** Test
The variable apartment is declared
The value of the variable apartment is an object
The variable keys is declared
The value of the variable keys is the array ["descr", "rating", "price"]
The variable values is declared
The value of the variable values is the array ["Spacious apartment in the city center", 4, 2153]
To get an array of keys of the object apartment the Object.keys() method is used
To get an array of values ​​of the object apartment the Object.values() method is used

 */

// Javascript Editor:
// START
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = apartment;
const values = apartment;
*/

// Javascript Editor:
// FINISH
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys); // ["descr", "rating", "price"]
console.log(values); // ["Spacious apartment in the city center", 4, 2153]
*/

// RESULT
/*
Result

Done

Assignment 15/41
The variable 'apartment' is declared
The value of the variable 'apartment' is an object
The variable 'keys' is declared
The value of the variable 'keys' is an array ['descr', 'rating', 'price']
The value of the 'keys' variable was obtained using the Object.keys() method
The variable 'values' is declared
The value of the variable 'values' is an array ['Spacious apartment in the city center', 4, 2153]
The value of the variable 'values' was obtained using the Object.values() method

Result of code execution:
[ 'descr', 'rating', 'price' ]
[ 'Spacious apartment in the city center', 4, 2153 ]

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 16/41  Status: Done

/*
** THEORY
TASK: PAYROLL EXPENSES

** TASK
Write a function countTotalSalary(salaries) that takes a salaries object, where the property name is the employee's name and the property value is the salary. The function should calculate the total amount of employees' salaries and return it. Use the variable totalSalary to store the total salary.

** Test
The function countTotalSalary(salaries) is declared
The call countTotalSalary({}) returns 0
The call countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) returns 330
The call countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) returns 400
The function only counts the object's own properties

 */

// Javascript Editor:
// START
/*
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  // Change code above this line
  return totalSalary;
}
*/

// Javascript Editor:
// FINISH
/*
'use strict';

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  for (const salary of values) {
    totalSalary += salary;
  }
  // Change code above this line
  return totalSalary;
}

countTotalSalary({}); // returns 0
countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // returns 330
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // returns 400

console.log(countTotalSalary({})); // returns 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // returns 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // returns 400
*/

// RESULT
/*
Result

Done

Assignment 16/41
The function countTotalSalary(salaries) is declared
The call countTotalSalary({}) returns 0
The call countTotalSalary({ mango: 100, poly: 150, alfred: 80}) returns 330
The call countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }}) returns 400
The function only counts the object's own properties

Result of code execution:
0
330
400

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 17/41  Status: Done

/*
** THEORY
The standard set of daily tasks for a developer includes manipulating an array of objects of the same type. This means that all objects in the array are guaranteed to have the same set of properties, but with different values.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];
To iterate over such an array, the standard for...of loop is used. The values ​​of the properties of each object can be obtained using the "dot" syntax, since in each object the set of properties and their names will be the same, only the values ​​differ.

for (const book of books) {
  // Book object
  console.log(book);
  // Name
  console.log(book.title);
  // Author
  console.log(book.author);
  // Rating
  console.log(book.rating);
}

** TASK
Iterate over the array of colors objects using a for...of loop. Add the hex property values ​​to the hexColors array, and the rgb property values ​​from all the colors array objects to the rgbColors array.

** Test
The variable colors is declared
The value of the variable colors is an array
The variable hexColors is declared
The value of the variable hexColors is the array ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
The variable rgbColors is declared
The value of the rgbColors variable is the array ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

 */

// Javascript Editor:
// START
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors);
*/

// RESULT
/*
Result

Done

Assignment 17/41
The variable 'colors' is declared
The value of the 'colors' variable is an array
The variable 'hexColors' is declared
The value of the variable 'hexColors' is an array ['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
The variable 'rgbColors' is declared
The value of the 'rgbColors' variable is an array ['244,67,54', '33,150,243', '76,175,80', '255,235,59']
The values of the 'hexColors' and 'rgbColors' variables were obtained using the 'for...of' loop

Result of code execution:
[ '#f44336', '#2196f3', '#4caf50', '#ffeb3b' ]
[ '244,67,54', '33,150,243', '76,175,80', '255,235,59' ]

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 18/41  Status: Done

/*
** THEORY
TASK. FINDING AN OBJECT BY PROPERTY VALUE

** TASK
Write a function getProductPrice(productName) that takes one parameter, productName - the name of the product. The function looks for a product object with this name (the name property) in the products array and returns its price (the price property). If no product with the same name is found, the function returns null.

** Test
The function getProductPrice(productName) is declared.
The call getProductPrice("Radar") returns 1300.
The call getProductPrice("Grip") returns 1200.
The call getProductPrice("Scanner") returns 2700.
The call getProductPrice("Droid") returns 400.
The call getProductPrice("Engine") returns null.

 */

// Javascript Editor:
// START
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  let result;
  for (const product of products) {
    // console.log(product.name);
    // console.log(productName);
    // console.log(productName === product.name);
    // console.log(product.price);

    if (productName === product.name) {
      // console.log(product.price);
      result = product.price;
      break;
    } else {
      // console.log(null);
      result = null;
    }
    // Change code above this line
  }
  return result;
}

getProductPrice('Radar'); // returns 1300.
getProductPrice('Grip'); // returns 1200.
getProductPrice('Scanner'); // returns 2700.
getProductPrice('Droid'); // returns 400.
getProductPrice('Engine'); // returns null.

console.log(getProductPrice('Radar')); // returns 1300.
console.log(getProductPrice('Grip')); // returns 1200.
console.log(getProductPrice('Scanner')); // returns 2700.
console.log(getProductPrice('Droid')); // returns 400.
console.log(getProductPrice('Engine')); // returns null.
*/

// RESULT
/*
Result

Done

Assignment 18/41
The function getProductPrice(productName) is declared
The call getProductPrice('Radar') returns 1300
The call getProductPrice('Grip') returns 1200
The call getProductPrice('Scanner') returns 2700
The call getProductPrice('Droid') returns 400
The call getProductPrice('Engine') returns null

Result of code execution:
1300
1200
2700
400
null
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 19/41  Status: Done

/*
** THEORY
TASK: PROPERTY VALUES COLLECTION

** TASK
Write a function getAllPropValues(propName) that takes one parameter propName - the name (key) of the property. The function should return an array of all the values of the property with that name from each object in the products array. If the objects do not have a property with the same name, the function returns an empty array.

** Test
The function getAllPropValues(propName) is declared
The call getAllPropValues("name") returns ["Radar", "Scanner", "Droid", "Grip"]
The call getAllPropValues("quantity") returns [4, 3, 7, 9]
The call getAllPropValues("price") returns [1300, 2700, 400, 1200]
The call getAllPropValues("category") returns []

 */

// Javascript Editor:
// START
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line

  // Change code above this line
}
*/

// Javascript Editor:
// FINISH
/*
'use strict';

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let propValues = [];
  for (const product of products) {
    if (product[propName]) {
      propValues.push(product[propName]);
    } else {
      propValues = [];
    }
  }
  // console.log(propValues);
  // console.table(propValues);
  return propValues;
}

OR not the best but working
// function getAllPropValues(propName) {
//   let propValues = [];
//   for (const product of products) {
//     if (product[propName] === undefined) {
//       propValues = [];
//       break;
//     } else {
//       // console.log(product[propName]);
//       propValues.push(product[propName]);
//     }
//   }
//   // console.log(propValues);
//   // console.table(propValues);
//   return propValues;
// }

getAllPropValues('name'); // returns ["Radar", "Scanner", "Droid", "Grip"]
getAllPropValues('quantity'); // returns [4, 3, 7, 9]
getAllPropValues('price'); // returns [1300, 2700, 400, 1200]
getAllPropValues('category'); // returns []

console.log(getAllPropValues('quantity')); // returns [4, 3, 7, 9]
console.log(getAllPropValues('name')); // returns ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('price')); // returns [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // returns []

*/

// RESULT
/*
Result

Done

Assignment 19/41
The function getAllPropValues(propName) is declared
Your code takes too long to execute
The call getAllPropValues('quantity') returns [4, 3, 7, 9]
The call getAllPropValues('price') returns [1300, 2700, 400, 1200]
The call getAllPropValues('category') returns []

Result of code execution:
[ 4, 3, 7, 9 ]
[ 'Radar', 'Scanner', 'Droid', 'Grip' ]
[ 1300, 2700, 400, 1200 ]
[]

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 20/41  Status: Done

/*
** THEORY
TASK: TOTAL PRICE

** TASK
Write a function calculateTotalPrice(productName) that takes one parameter productName - the name of the product. The function should return the total cost (price * quantity) of the product with this name from the products array.

** Test
The function calculateTotalPrice(productName) is declared
The call calculateTotalPrice("Blaster") returns 0
The call calculateTotalPrice("Radar") returns 5200
The call calculateTotalPrice("Droid") returns 2800
The call calculateTotalPrice("Grip") returns 10800
The call calculateTotalPrice("Scanner") returns 8100

 */

// Javascript Editor:
// START
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line

  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice;
  for (const product of products) {
    // console.log(product.name);
    // console.log(productName === product['name']);
    // console.log(productName === product.name);
    // console.log(product.price);
    // console.log(product.quantity);
    // console.log(product.price * product.quantity);
    // console.log((totalPrice = product.price * product.quantity));
    if (productName === product.name) {
      // if (productName === product['name']) {
      totalPrice = product.price * product.quantity;
      break;
    } else {
      totalPrice = 0;
    }
  }
  return totalPrice;
}

calculateTotalPrice('Blaster'); // returns 0
calculateTotalPrice('Radar'); // returns 5200
calculateTotalPrice('Droid'); // returns 2800
calculateTotalPrice('Grip'); // returns 10800
calculateTotalPrice('Scanner'); // returns 8100

console.log(calculateTotalPrice('Blaster')); // returns 0
console.log(calculateTotalPrice('Radar')); // returns 5200
console.log(calculateTotalPrice('Droid')); // returns 2800
console.log(calculateTotalPrice('Grip')); // returns 10800
console.log(calculateTotalPrice('Scanner')); // returns 8100

console.log(
*/

// RESULT
/*
Result

Done

Assignment 20/41
The function calculateTotalPrice(productName) is declared
The call calculateTotalPrice('Radar') returns 5200
The call calculateTotalPrice('Droid') returns 2800
The call calculateTotalPrice('Grip') returns 10800
The call calculateTotalPrice('Scanner') returns 8100
The call calculateTotalPrice('Blaster') returns 0

Result of code execution:
0
5200
2800
10800
8100
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 21/41  Status: Done

/*
** THEORY
Complex data is always represented by an object. Multiple calls to object properties visually pollute the code.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? "public" : "closed";
const message = `The book ${book.title} by ${book.author} with a rating ${book.rating} is available in ${accessType}.`;
Destructuring allows you to "unpack" the values ​​of an object's properties into local variables. This makes the resulting code less "noisy".

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

// Destructuring
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? "public" : "closed";
const message = `The book ${title} by ${author} with a rating ${rating} is available in ${accessType}.`;
Destructuring is always on the left side of the assignment operation. The values ​​of the object's properties are assigned to the variables inside the curly braces. If the name of the variable and the name of the property are the same, then the assignment occurs, otherwise undefined will be assigned to it. The order in which the variables are declared in curly braces is not important.

** TASK
The three-day forecast of maximum temperatures came and we calculate the average temperature for three days (meanTemperature). Replace the declarations of the variables yesterday, today and tomorrow with one destructuring operation of the properties of the object highTemperatures.

** Test
The variable highTemperatures is declared
The value of the variable highTemperatures is an object
The variable yesterday is declared using destructuring
The value of the variable yesterday is the number 28
The variable today is declared using destructuring
The value of the variable today is the number 26
The variable tomorrow is declared using destructuring
The value of the variable tomorrow is the number 33
The variable meanTemperature is declared
The value of the meanTemperature variable is the number 29
The syntax of destructuring the object highTemperatures is used

 */

// Javascript Editor:
// START
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 21/41
The variable 'highTemperatures' declared
The value of the variable 'highTemperatures' is an object
The variable 'meanTemperature' is declared
The value of the variable 'meanTemperature' is number 29
The variable 'yesterday' is declared by using destructuring
The value of the variable 'yesterday' is number 28
The variable 'today' is declared by using destructuring
The value of the 'today' variable is number 26
The variable 'tomorrow' is declared by using destructuring
The value of the 'tomorrow' variable is number 33
The syntax for destructuring the highTemperatures object is used

Result of code execution:
29
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 22/41  Status: Done

/*
** THEORY
In order to avoid being assigned undefined when destructuring non-existent properties, you can set default values ​​to variables, which will be assigned only if the object does not have a property with the same name.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Add a cover picture if it is not in the book object
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"

** TASK
The maximum temperature forecast can also have an optional icon property - the weather icon. Replace the declarations of the variables yesterday, today, tomorrow and icon with one destructuring operation of the properties of the highTemperatures object. Set the default value for icon - the string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

** Test
The variable highTemperatures is declared
The value of the variable highTemperatures is an object
The variable highTemperatures is declared
The value of the variable highTemperatures is an object
The variable yesterday is declared by using destructuring
The value of the variable yesterday is number 28
The variable today is declared by using destructuring
The value of the variable today is number 26
The variable tomorrow is declared by using destructuring
The value of the variable tomorrow is number 33
The variable icon is declared by using destructuring
The value of the variable icon is a string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
Object destructuring is used

 */

// Javascript Editor:
// START
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;
const icon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

*/

// Javascript Editor:
// FINISH
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 22/41
The variable 'highTemperatures' is declared
The value of the variable 'highTemperatures' is an object
The variable 'meanTemperature' is declared
The value of the variable 'meanTemperature' is number 29
The variable 'yesterday' is declared by using destructuring
The value of the variable 'yesterday' is number 28
The variable 'icon' is declared by using destructuring
The value of the variable 'icon' is the string 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
The variable 'today' is declared by using destructuring
The value of the 'today' variable is number 26
The variable 'tomorrow' is declared by using destructuring
The value of the 'tomorrow' variable is number 33
The syntax for destructuring the highTemperatures object is used

Result of code execution:
29
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 23/41  Status: Done

/*
** THEORY
During destructuring, you can change the name of the variable into which the property value is unpacked. First, we write the name of the property from which we want to get the value, after which we put a colon and write the name of the variable in which the value of this property must be placed.

const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "The Dream of a Ridiculous Man",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // The Dream of a Ridiculous Man 
console.log(secondCoverImage); // https://via.placeholder.com/640/480
Such an entry is read as "Create a variable firstTitle, into which put the value of the property title from the object firstBook", and so on.

** TASK
Replace the declarations of the variables highYesterday, highToday, highTomorrow and highIcon with one operation of destructuring the properties of the object highTemperatures. Set the default value for highIcon - string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

** Test
The variable highTemperatures is declared
The value of the variable highTemperatures is an object
The variable highYesterday is declared
The value of the variable highYesterday is number 28
The variable highToday is declared
The value of the variable highToday is number 26
The variable highTomorrow is declared
The value of the variable highTomorrow is number 33
The variable highIcon is declared
The value of the variable highIcon is a string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
Object destructuring is used

 */

// Javascript Editor:
// START
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const highYesterday = highTemperatures.yesterday;
const highToday = highTemperatures.today;
const highTomorrow = highTemperatures.tomorrow;
const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
console.log(meanTemperature);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 23/41
The variable 'highTemperatures' is declared
The value of the variable 'highTemperatures' is an object
The variable 'meanTemperature' is declared
The value of the variable 'meanTemperature' is number 29
The variable 'highYesterday' is declared by using destructuring
The value of the variable 'highYesterday' is number 28
The variable 'highIcon' is declared by using destructuring
The value of the variable 'highIcon' is the string 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
The variable 'highToday' is declared by using destructuring
The value of the variable 'highToday' is number 26
The variable 'highTomorrow' is declared by using destructuring
The value of the variable 'highTomorrow' is number 33
The syntax for destructuring the highTemperatures object is used

Result of code execution:
29
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 24/41  Status: Done

/*
** THEORY
When iterating over an array of objects with a for...of loop, multiple calls to the object's properties are obtained.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
In order to reduce the number of repetitions, you can destructure the properties of the object into local variables in the body of the loop.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
If the object has few properties, destructuring can be done right at the place where the book variable is declared.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

** TASK
Refactor the for...of loop so that it uses object destructuring.

** Test
The variable colors is declared
The value of the variable colors is an array
The variable hexColors is declared
The value of the variable hexColors is the array ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
The variable rgbColors is declared
The value of the rgbColors variable is the array ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
To iterate over the array, the for...of loop is used
Object destructuring is used in the for...of loop

 */

// Javascript Editor:
// START
/*
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
console.log(hexColors);
console.log(rgbColors);
*/

// Javascript Editor:
// FINISH
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(
*/

// RESULT
/*
Result

Done

Assignment 24/41
The variable 'colors' is declared
The value of the 'colors' variable is an array
The variable 'hexColors' is declared
The value of the variable 'hexColors' is an array ['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
The variable 'rgbColors' is declared
The value of the variable 'rgbColors' is an array ['244,67,54', '33,150,243', '76,175,80', '255,235,59']
The 'for...of' loop is used to iterate over the array
Object destructuring is used in the 'for...of' loop
Result of code execution:
[ '#f44336', '#2196f3', '#4caf50', '#ffeb3b' ]
[ '244,67,54', '33,150,243', '76,175,80', '255,235,59' ]
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 25/41  Status: Done

/*
** THEORY
The same principles are used for destructuring the properties of nested objects as in the previous three exercises.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

** TASK
We received a weather forecast for two days, with minimum and maximum temperatures, as well as optional icons. Replace all variable declarations with one destructuring operation of properties of the forecast object. Set the default value for icons, use the variables todayIcon and tomorrowIcon, and use the string
"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

** Test
The variable forecast is declared
The value of the variable forecast is an object
The variable highToday is declared by using destructuring
The value of the variable highToday is number 32
The variable lowToday is declared by using destructuring
The value of the variable lowToday is number 28
The variable todayIcon is declared by using destructuring
The value of the todayIcon variable is the string "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
The variable highTomorrow is declared by using destructuring
The value of the variable highTomorrow is number 31
The variable lowTomorrow is declared by using destructuring
The value of the variable lowTomorrow is number 27
The variable tomorrowIcon is declared by using destructuring
The value of the tomorrowIcon variable is the string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
The syntax of destructuring the object highTemperatures is used

 */

// Javascript Editor:
// START
/*
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const highToday = forecast.today.high;
const lowToday = forecast.today.low;
const todayIcon = forecast.today.icon;

const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon;

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

console.log(lowToday); // = forecast.today.low;
console.log(highToday); // = forecast.today.high;
console.log(todayIcon); // = forecast.today.icon;

console.log(lowTomorrow); // = forecast.tomorrow.low;
console.log(highTomorrow); // = forecast.tomorrow.high;
console.log(tomorrowIcon); // = forecast.tomorrow.icon;

console.log(
*/

// RESULT
/*
Result

Done

Assignment 25/41
The variable 'forecast' is declared
The value of the variable 'forecast' is an object
The variable 'highToday' is declared by using destructuring
The value of the 'highToday' variable is number 32
The variable 'lowToday' is declared by using destructuring
The value of the 'lowToday' variable is number 28
The variable 'todayIcon' is declared by using destructuring
The value of the 'todayIcon' variable is the string 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'
The variable 'highTomorrow' is declared by using destructuring
The value of the 'highTomorrow' variable is number 31
The variable 'lowTomorrow' is declared by using destructuring
The value of the variable 'lowTomorrow' is number 27
The variable'tomorrowIcon' is declared by using destructuring
The value of the variable 'tomorrowIcon' is the string 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
The syntax for destructuring the forecast object is used

Result of code execution:
28
32
https://www.flaticon.com/svg/static/icons/svg/861/861059.svg
27
31
https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 26/41  Status: Done

/*
** THEORY
If the function takes more than two or three arguments, it's very easy to get confused in which sequence to pass what. The result is a very non-obvious code at the place of its сall.

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Do something with the parameters
  console.log(title);
  console.log(numberOfPages);
  // And so on
}

// ❌ What is 736? What is 10283? What is true?
doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);
The "Settings Objec" pattern helps solve this problem by replacing a set of parameters with just one — an object with named properties.

function doStuffWithBook(book) {
  // Do something with object properties
  console.log(book.title);
  console.log(book.numberOfPages);
  // And so on
}
Then, during its call, we pass one object with the necessary properties.

// ✅ Everything is clear
doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});
Another plus is that you can destructure the object in the book parameter.

// This can be done in the body of the function.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // And so on
}

// Or in the signature, no difference.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // And so on
}

** TASK
The calculateMeanTemperature(forecast)function takes one parameter forecast` - a temperature object for two days of the following format:

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Replace the declarations of the variables todayLow, todayHigh, tomorrowLow and tomorrowHigh with one operation of destructuring the properties of the object forecast.

** Test
The function calculateMeanTemperature (forecast) is declared
The body of the function uses object destructuring
The todayHigh variable is declared in the body of the function using destructuring
The todayLow variable is declared in the body of the function using destructuring
The tomorrowLow variable is declared in the body of the function using destructuring
The tomorrowHigh variable is declared in the body of the function using destructuring
The call calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) returns 28.5
The call calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) returns 37

 */

// Javascript Editor:
// START
/*
// Change code below this line
function calculateMeanTemperature(forecast) {
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';
function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

calculateMeanTemperature({
  today: { low: 28, high: 32 },
  tomorrow: { low: 25, high: 29 },
}); // returns 28.5
calculateMeanTemperature({
  today: { low: 37, high: 40 },
  tomorrow: { low: 33, high: 38 },
}); // returns 37

console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
); // returns 28.5
console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  })
); // returns 37

console.log(
*/

// RESULT
/*
Result

Done

Assignment 26/41
The function calculateMeanTemperature(forecast) is declared
The call 'calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })' returns 28.5
The call 'calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })' returns 37
Object destructuring is used in the function body
The variable `todayHigh` is declared in the function body using destructuring
The variable `todayLow` is declared in the function body using destructuring
The variable `tomorrowHigh` is declared in the function body using destructuring
The variable `tomorrowLow` is declared in the function body using destructuring

Result of code execution:
28.5
37
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 27/41  Status: Done

/*
** THEORY
The ... (spread) syntax allows you to spread a collection of elements (array, string, or object) into the location where a set of distinct values ​​is expected. Of course, there are some restrictions, for example, you cannot spread an array into an object and vice versa.

An analogy can be made with a box of apples. Putting the box on the floor without removing the apples from it, we get an analog of the array of values. If you pour apples from the box onto the floor, spreading occurs - a set of individual values.

There is only one difference - in JavaScript, spreading does not change the original collection, that is, a copy of each element is made. After spreading, there will be a box full of apples and a copy of each apple on the floor.

For example, the Math.max (arguments) method looks for and returns the largest of the arguments (numbers), that is, it expects not an array of values, but an arbitrary number of arguments.

const temps = [14, -4, 25, 8, 11];

// The console will have an array
console.log(temps);
// ❌ This will not work, because we are passing the whole array
console.log(Math.max(temps)); // NaN

// There will be a bunch of separate numbers in the console
console.log(...temps);
// ✅ Spread the collection of items as separate arguments
console.log(Math.max(...temps)); // 25
That is, the record Math.max(...[14, -4, 25, 8, 11]), after interpretation turns into Math.max(14, -4, 25, 8, 11) - syntax ...returns an unpacked array, that is, spreads its elements as separate arguments.

** TASK
The scores variable stores an array of test results. Using spreading and the Math.max() and Math.min() methods, modify the code so that the bestScore variable has the highest score, and the worstScore variable has the lowest.

** Test
The variable scores is declared
The value of the variable scores is the array [89, 64, 42, 17, 93, 51, 26]
The variable bestScore is declared
The value of the variable bestScore is number 93
The variable worstScore is declared
The value of the variable worstScore is number 17
The syntax '...' on the 'scores' array is used to pass arguments to the Math.max() method
The syntax '...' on the 'scores' array is used to pass arguments to the Math.min() method

 */

// Javascript Editor:
// START
/*
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = scores;
const worstScore = scores;

*/

// Javascript Editor:
// FINISH
/*
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore); // 93
console.log(worstScore); // 17

console.log(Math.max(...scores)); // 93
console.log(Math.min(...scores)); // 17

console.log(
*/

// RESULT
/*
Result

Done

Assignment 27/41
The variable 'scores' is declared
The value of the variable `scores` is an array [89, 64, 42, 17, 93, 51, 26]
The variable 'bestScore' is declared
The value of the variable `bestScore` is number 93
The variable 'worstScore' is declared
The value of the variable `worstScore` is 17
The syntax '...' on the 'scores' array is used to pass arguments to the Math.max() method
The syntax '...' on the 'scores' array is used to pass arguments to the Math.min() method

Result of code execution:
93
17
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 28/41  Status: Done

/*
** THEORY
The spread operation allows you to create a copy of an array or "glue" an arbitrary number of arrays into one new one. Previously, the slice() and concat() methods were used for this, but the spread operation allows you to do the same in a shorter form.

const temps = [14, -4, 25, 8, 11];

// This is an exact but independent copy of the temps array
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
In the example above, we have a box of apples temps and we want to make an exact copy of it. Take an empty box and pour apples from the original temps box into it - spread it into another collection. In this case, the temps box will not change, it will still contain apples, and the new box will contain their exact copies.

In the following example, we pour apples from two boxes into a new one. The original boxes (arrays) will not change, but the new one will contain copies of all their apples (elements). The spread order is important - it affects the order of the elements in the new collection.

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

** TASK
The variables firstGroupScores, secondGroupScores and thirdGroupScores store the test results of individual groups. Using spread, add the code so that:

The variable allScores stored an array of all the results from the first to the third group.
The variable bestScore had the highest overall score.
The worstScore variable had the lowest overall score.

** Test
The variable firstGroupScores is declared
The value of the variable firstGroupScores is the array [64, 42, 93]
The variable secondGroupScores is declared
The value of the variable secondGroupScores is the array [89, 14, 51, 26]
The variable thirdGroupScores is declared
The value of the variable thirdGroupScores is the array [29, 47, 18, 97, 81]
The variable allScores is declared.
The value of the variable allScores is the array [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
The variable bestScore is declared
The value of the variable bestScore is number 97
The variable worstScore is declared
The value of the variable worstScore is number 14
When assigning a value to the variable allScores, the syntax ... was used to fill the array
To pass arguments to the Math.max() method, use the syntax ... on the allScores array
To pass arguments to the Math.min() method, use the syntax ... on the allScores array

 */

// Javascript Editor:
// START
/*
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [];
const bestScore = allScores;
const worstScore = allScores;

*/

// Javascript Editor:
// FINISH
/*
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];

const bestScore = Math.max(...allScores); // 97
const worstScore = Math.min(...allScores); // 14

console.log(`The best score: ${bestScore}`); // 97
console.log(`The worst score: ${worstScore}`); // 14

console.log(
*/

// RESULT
/*
Result

Done

Assignment 28/41
The variable 'firstGroupScores' is declared
The value of the variable `firstGroupScores` is an array [64, 42, 93]
The variable 'secondGroupScores' is declared
The value of the variable `secondGroupScores` is an array [89, 14, 51, 26]
The variable 'thirdGroupScores' is declared
The value of the variable `thirdGroupScores` is an array [89, 14, 51, 26]
The variable 'allScores' is declared
The value of the variable `allScores` is an array [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
The variable 'bestScore' is declared
The value of the variable `bestScore` is 97
The variable 'worstScore' is declared
The value of the variable `worstScore` is 14
To pass arguments to the Math.max() method, use the syntax '...' on the 'allScores' array
To pass arguments to the Math.min() method, use the syntax '...' on the 'allScores' array
When assigning a value to the variable `allScores`, the syntax `...` was used to fill the array

Result of code execution:
The best score: 97
The worst score: 14
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 29/41  Status: Done

/*
** THEORY
The spread operation allows you to spread the properties of an arbitrary number of objects into one new one.

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }
Spread order matters. Object property names are unique, so the properties of the spread object can overwrite the value of an existing property if their names are the same.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
If the apples in the box had stickers with labels, then in one box there cannot be two apples with the same labels. Therefore, when the second box is poured, all apples whose labels coincide with those that are already in the new one will replace those that are already there.

While spreading, you can add properties to any location. The main thing to remember is that the property name is unique and that its value can be overwritten.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

** TASK
In the constructor, you can create new tests for which there are default settings that are stored in the defaultSettings variable. During test creation, all or part of the settings can be overridden, they are stored in the overrideSettings variable.

In order to get the final test settings, you need to take the default settings and apply the overridden settings on top of them. Add the code so that the finalSettings variable contains the final test settings object.

** Test
The variable defaultSettings is declared
The value of the defaultSettings variable is an object
The variable overrideSettings is declared
The value of the overrideSettings variable is an object
The variable finalSettings is declared
The value of the finalSettings variable is an object
The value of the property finalSettings.theme is to "light"
The value of the property finalSettings.public is "false"
The value of the property finalSettings.withPassword is "true"
The value of the property finalSettings.minNumberOfQuestions is 10
The value of the property finalSettings.timePerQuestion is 30
When assigning a value to the variable finalSettings, the syntax is ... is used

 */

// Javascript Editor:
// START
/*
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {};

*/

// Javascript Editor:
// FINISH
/*
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings);
// {
  theme: 'light',
  public: false,
  withPassword: true,
  minNumberOfQuestions: 10,
  timePerQuestion: 30
}

console.log(finalSettings.theme); // is to "light"
console.log(finalSettings.public); // is "false"
console.log(finalSettings.withPassword); // is "true"
console.log(finalSettings.minNumberOfQuestions); // is 10
console.log(finalSettings.timePerQuestion); // is 30

console.log(
*/

// RESULT
/*
Result

Done

Assignment 29/41
The variable 'defaultSettings' is declared
The value of the `defaultSettings` variable is an object
The variable 'overrideSettings' is declared
The value of the `overrideSettings` variable is an object
The variable 'finalSettings' is declared
The value of the `finalSettings` variable is an object
The value of the property 'finalSettings.theme' is 'light'
The value of the property 'finalSettings.public' is false
The value of the property 'finalSettings.withPassword' is true
The value of the property 'finalSettings.minNumberOfQuestions' is 10
The value of the property 'finalSettings.timePerQuestion' is 30
When assigning a value to the variable 'finalSettings', the syntax is '...' is used

Result of code execution:
{
  theme: 'light',
  public: false,
  withPassword: true,
  minNumberOfQuestions: 10,
  timePerQuestion: 30
}
light
false
true
10
30
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 30/41  Status: Done

/*
** THEORY
TASK. TASK CARDS

** TASK
Write a function makeTask(data) that takes one parameter data - an object with the following properties.

text - the text of the task.
category - task category.
priority - the priority of the task.
The function should compose and return a new task object without directly modifying the data parameter. The new object must have a completed property, the value of which is stored in the local variable of the same name.

The data parameter is guaranteed to contain only the text property, and the other two, category and priority, may be missing. Then, in the new task object, the category and priority properties should contain the default values ​​stored in the local variables of the same name.

** Test
The function makeTask(data) is declared
The call makeTask({}) returns { category: "General", priority: "Normal", completed: false }
The call makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) returns { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
The call makeTask({ category: "Finance", text: "Take interest" }) returns { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
The call makeTask({ priority: "Low", text: "Choose shampoo" }) returns { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
The call makeTask({ text: "Buy bread" }) returns { category: "General", priority: "Normal", text: "Buy bread", completed: false }

 */

// Javascript Editor:
// START
/*
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line

  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  const completedTask = { category, priority, ...data, completed };
  // Change code above this line
  return completedTask;
}

makeTask({});
// returns { category: "General", priority: "Normal", completed: false }

makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });
// returns { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

makeTask({ category: 'Finance', text: 'Take interest' });
// returns { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

makeTask({ priority: 'Low', text: 'Choose shampoo' });
// returns { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

makeTask({ text: 'Buy bread' });
// returns { category: "General", priority: "Normal", text: "Buy bread", completed: false }

console.log(makeTask({}));
// returns { category: "General", priority: "Normal", completed: false }

console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  })
);
// returns { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// returns { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// returns { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

console.log(makeTask({ text: 'Buy bread' }));
// returns { category: "General", priority: "Normal", text: "Buy bread", completed: false }
console.log(
*/

// RESULT
/*
Result

Done

Assignment 30/41
The function makeTask(data) is declared
The call makeTask({}) returns { category: 'General', priority: 'Normal', completed: false }
The call makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }) returns { category: 'Homemade', priority: 'Low', text: 'Take out the trash', completed: false }
The call makeTask({ category: 'Finance', text: 'Take interest' }) returns { category: 'Finance', priority: 'Normal', text: 'Take interest', completed: false }
The call makeTask({ priority: 'Low', text: 'Choose shampoo' }) returns { category: 'General', priority: 'Low', text: 'Choose shampoo', completed: false }
The call makeTask({ text: 'Buy bread' }) returns { category: 'General', priority: 'Normal', text: 'Buy bread', completed: false }

Result of code execution:
{ category: 'General',
  priority: 'Normal',
  completed: false }
{
  category: 'Homemade',
  priority: 'Low',
  text: 'Take out the trash',
  completed: false
}
{
  category: 'Finance',
  priority: 'Normal',
  text: 'Take interest',
  completed: false
}
{
  category: 'General',
  priority: 'Low',
  text: 'Choose shampoo',
  completed: false
}
{
  category: 'General',
  priority: 'Normal',
  text: 'Buy bread',
  completed: false
}
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 31/41  Status: Done

/*
** THEORY
The ... (rest) operation allows you to collect a group of independent elements into a new collection. Syntactically, this is a twin of the spread operation, but it is easy to distinguish between them - spread is when ... is on the right side of the assignment operation, and collection is when ... is on its left side.

Let's go back to the apples analogy. If there are apples on the floor and we have an empty box, then the rest operation will allow us to “collect” the apples into the box. In this case, the original apples will remain on the floor, and there will be a copy of each apple in the box.

One of the uses of the rest operation is in the creation of functions that can take an arbitrary number of arguments.

//  How to declare function parameters so that 
//  any number of arguments can be passed?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
If we remove all the "syntactic noise" and look at the arguments and parameters of the function, then the arguments are on the right side of the assignment operation, and the parameters on the left, because the values ​​of the arguments are assigned to the declared parameters. So you can "collect" all the function arguments into one parameter using the rest operation.

function multiply(...args) {
  console.log(args); // array of all arguments
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
The parameter name can be arbitrary. Most often it is called args, restArgs, or otherArgs, short for arguments.

** TASK
Using the rest operation, supplement the add() function code so that it accepts any number of arguments, reads, and returns their sum.

** Test
The function add is declared
The function add uses the args parameter
To collect arguments into the variable args, the function signature uses the syntax ... (operator rest)
The call add(15, 27) returns 42
The call add(12, 4, 11, 48) returns 75
The call add(32, 6, 13, 19, 8) returns 78
The call add(74, 11, 62, 46, 12, 36) returns 241

 */

// Javascript Editor:
// START
/*
// Change code below this line
function add() {
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
function add() {
  // Change code above this line
}

function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

add(15, 27); // expected output: 42
add(12, 4, 11, 48); // expected output: 75
add(32, 6, 13, 19, 8); // expected output: 78
add(74, 11, 62, 46, 12, 36); // expected output: 241

console.log(add(15, 27)); // expected output: 42
console.log(add(12, 4, 11, 48)); // expected output: 75
console.log(add(32, 6, 13, 19, 8)); // expected output: 78
console.log(add(74, 11, 62, 46, 12, 36)); // expected output: 241

console.log(
*/

// RESULT
/*
Result

Done

Assignment 31/41
The function 'add' is declared
The function `add` uses the `args` parameter
To collect arguments into the `args` variable, the function signature uses the syntax `...` (`rest` operator)
The call `add(15, 27)` returns 42
The call `add(12, 4, 11, 48)` returns 75
The call `add(32, 6, 13, 19, 8)` returns 78
The call `add(74, 11, 62, 46, 12, 36)` returns 241

Result of code execution:
42
75
78
241
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 32/41  Status: Done

/*
** THEORY
The ... (rest) operation also allows you to collect into an array only that part of the arguments that is necessary, declaring the parameters before "collecting".

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // The value of the first argument
  console.log(secondNumber); // The value of the second argument
  console.log(otherArgs); // An array of other arguments
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
All arguments for which parameters will be declared will pass their values ​​to those paremeters, the rest of the arguments will be placed in an array. The rest operation collects all the remaining arguments and therefore must go last in the function signature, otherwise there will be an error.

** TASK
The addOverNum() function calculates the sum of all arguments. Modify the parameters and body of the addOverNum() function so that it only counts the sum of those arguments that are greater than the specified number. This number must be the first parameter of the function.

** Test
The function addOverNum() is declared
The call addOverNum(50, 15, 27) returns 0
The call addOverNum(10, 12, 4, 11, 48, 10, 8) returns 71
The call addOverNum(15, 32, 6, 13, 19, 8) returns 51
The call addOverNum(20, 74, 11, 62, 46, 12, 36) returns 218

 */

// Javascript Editor:
// START
/*
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}


addOverNum(50, 15, 27); // returns 0
addOverNum(10, 12, 4, 11, 48, 10, 8); // returns 71
addOverNum(15, 32, 6, 13, 19, 8); // returns 51
addOverNum(20, 74, 11, 62, 46, 12, 36); // returns 218

console.log(addOverNum(50, 15, 27)); // returns 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // returns 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); // returns 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // returns 218

console.log(
*/

// RESULT
/*
Result

Done

Assignment 32/41
The function 'addOverNum' is declared
The call addOverNum(50, 15, 27) returns 0
The call addOverNum(10, 12, 4, 11, 48, 10, 8) returns 71
The call addOverNum(15, 32, 6, 13, 19, 8) returns 51
The call addOverNum(20, 74, 11, 62, 46, 12, 36) returns 218

Result of code execution:
0
71
51
218
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 33/41  Status: Done

/*
** THEORY
TASK. ARRAY OF MATCHES

** TASK
The findMatches() function takes an arbitrary number of arguments. The first argument will always be an array of numbers, and the rest of the arguments will be just numbers.

Modify the function code so that it returns a new array matches, which will contain only those arguments, starting with the second, that are in the array of the first argument.

For example, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) should return an array [1, 2], because only those numbers are in the first argument array.

** Test
The function findMatches() is declared
The call findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) returns [1, 2]
The call findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) returns [17, 89, 2]
The call findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) returns [24, 9, 41]
The call findMatches([63, 11, 8, 29], 4, 7, 16) returns []

 */

// Javascript Editor:
// START
/*
// Change code below this line
function findMatches() {
  const matches = []; // Don't change this line

  // Change code above this line
  return matches;
}

*/

// Javascript Editor:
// FINISH
/*
// Change code below this line
function findMatches(arrayNumbers, ...args) {
  const matches = []; // Don't change this line
  for (const arg of args) {
    if (arrayNumbers.includes(arg)) {
      matches.push(arg);
    }
  }
  // Change code above this line
  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // returns [1, 2]
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // returns [17, 89, 2]
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41); // returns [24, 9, 41]
findMatches([63, 11, 8, 29], 4, 7, 16); // returns []

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // returns [1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // returns [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // returns [24, 9, 41]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // returns []


console.log(
*/

// RESULT
/*
Result

Done

Assignment 33/41
The function 'findMatches' is declared
The call `findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)` returns `[1, 2]`
The call `findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)` returns `[17, 89, 2]`
The call `findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)` returns `[24, 9, 41]`
The call `findMatches([63, 11, 8, 29], 4, 7, 16)` returns `[]`

Result of code execution:
[ 1, 2 ]
[ 17, 89, 2 ]
[ 24, 9, 41 ]
[]
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 34/41  Status: Done

/*
** THEORY
Until now, we have considered objects only as stores of interrelated data, for example, information about a book, etc. Storage objects are usually found in an array of the same objects, which represents a collection of similar elements.

Objects can store not only data, but also functions for working with this data - methods. If the property value is a function, that property is called an object method.

// ✅ Logically and syntactically grouped entities
const bookShelf = {
  books: ["The Last Kingdom", "The Guardian of Dreams"],
  // This is an object method
  getBooks() {
    console.log("This method will return all books - property books");
  },
  // This is an object method
  addBook(bookName) {
    console.log("This method will add a new book to the books property");
  },
};

// Method calls
bookShelf.getBooks();
bookShelf.addBook("A new book");
Such objects can be called "models". They bind data and methods to work with that data. For example, it was possible to declare the variable books and two functions getBooks() and addBook(bookName), but then they would be three independent entities without an explicit syntactic, and with weak logical connections.

// ❌ Loosely coupled, independent entities
const books = [];
function getBooks() {}
function addBook() {}

** TASK
Add two more methods to the bookShelf object, which for now will just return strings by analogy with getBooks() and addBook(bookName).

The removeBook(bookName) method will remove the book by name. It returns the string "Deleting book <book name>", where <book name> is the value of the bookName parameter.

The updateBook(oldName, newName) method will update the title of the book to the new one. Returns the string "Updating book <old name> to <new name>", where <old name> and <new name> are the values ​​of the oldName and newName parameters, respectively.

** Test
The variable bookShelf is declared
The value of the bookShelf variable is an object
The value of the property bookShelf.getBooks is a method of the object
Calling the bookShelf.getBooks() method returns the string "Returning all books"
The value of the property bookShelf.addBook is an object method
Calling the method bookShelf.addBook("Haze") returns a string "Adding book Haze"
The value of the property bookShelf.removeBook is an object method
Calling the method bookShelf.removeBook("Red sunset") returns a string "Deleting book Red sunset"
The value of the property bookShelf.updateBook is an object method
Calling the method bookShelf.updateBook("Sands of dune", "Dune") returns the string "Updating book Sands of dune to Dune"

 */

// Javascript Editor:
// START
/*
const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  // Change code above this line
};
*/

// Javascript Editor:
// FINISH
/*
const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(bookOldName, bookNewName) {
    return `Updating book ${bookOldName} to ${bookNewName}`;
  },
  // Change code above this line
};


bookShelf.getBooks(); // method returns the string "Returning all books"
bookShelf.addBook("Haze"); // returns a string "Adding book Haze"
bookShelf.removeBook("Red sunset"); // returns a string "Deleting book Red sunset"
bookShelf.updateBook("Sands of dune", "Dune"); // returns the string "Updating book Sands of dune to Dune"

console.log(bookShelf.getBooks()); // method returns the string "Returning all books"
console.log(bookShelf.addBook("Haze")); // returns a string "Adding book Haze"
console.log(bookShelf.removeBook("Red sunset")); // returns a string "Deleting book Red sunset"
console.log(bookShelf.updateBook("Sands of dune", "Dune")); // returns the string "Updating book Sands of dune to Dune"

console.log(
*/

// RESULT
/*
Result


Assignment 34/41
The variable 'bookShelf' is declared
The value of the variable 'bookShelf' is an object
The value of the `bookShelf.getBooks` property is an object method
Calling the `bookShelf.getBooks()` method returns the string 'Returning all books'
The value of the `bookShelf.addBook` property is an object method
Calling the `bookShelf.addBook('Haze')` method returns the string 'Adding book Haze'
The value of the` bookShelf.removeBook` property is an object method
Calling the `bookShelf.removeBook('Red sunset')` method returns the string 'Deleting book Red sunset'
The value of the `bookShelf.updateBook` property is an object method
Calling the `bookShelf.updateBook('Sands of dune', 'Dune')` method returns the string 'Updating book Sands of Dune to Dune

Result of code execution:
Returning all books
Adding book Haze
Deleting book Red sunset
Updating book Sands of dune to Dune
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 35/41  Status: Done

/*
** THEORY
Methods are used to work with object properties and change them. To access the object in the method, not the variable name, for example, bookShelf is used, but the keyword this - the context. The value of this will be the object before "point", that is, the object that called this method, in our case it is a reference to the bookShelf object.

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    console.log(this);
  },
};

// Point is preceded by a bookShelf object,
// so when the method is called, this will store a reference to it.
bookShelf.getBooks(); // {books: ["The Last Kingdom"], getBooks: f}
In order to access the properties of an object in methods, we refer to it through this and then, as usual, “via a dot” to the properties.

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("Haze");
bookShelf.addBook("The Guardian of Dreams");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "Haze", "The Guardian of Dreams"]
bookShelf.removeBook("Haze");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Guardian of Dreams"]
It would be logical to think "Why not use the name of the object when accessing properties, because we are clearly not going to change it?" The fact is that the name of an object is not a reliable thing, the methods of one object can be copied into another (with a different name), and in the future we will find out that often, when creating an object, we do not know the name in advance. Using this ensures that the method works on the exact object that called it.

** TASK
Modify the updateBook(oldName, newName) method so that it changes the book title from oldName to newName in the books property. Use indexOf() to find the desired element in the array, and splice() to replace that element.

** Test
The variable bookShelf is declared
The value of the bookShelf variable is an object
The value of the property bookShelf.updateBook is an object method
After calling the method bookShelf.updateBook("Haze", "Dungeon chronicles"), the value of the property books is an array ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
After calling the method bookShelf.updateBook("The last kingdom", "Dune"), the value of the property books is an array ["Dune", "Haze", "The guardian of dreams"]

 */

// Javascript Editor:
// START
/*
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line

    // Change code above this line
  },
};

*/

// Javascript Editor:
// FINISH
/*
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
  },
};

bookShelf.updateBook('Haze', 'Dungeon chronicles');
// the value of the property books is an array ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

console.log(bookShelf.books);
// array ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

bookShelf.updateBook("The last kingdom", "Dune");
// the value of the property books is an array ["Dune", "Haze", "The guardian of dreams"]

console.log(bookShelf.books);
// array ["Dune", "Haze", "The guardian of dreams"]


console.log(
*/

// RESULT
/*
The variable 'bookShelf' is declared
The value of the variable 'bookShelf' is an object
The value of the `bookShelf.updateBook` property is an object method
After calling the `bookShelf.updateBook('Haze', 'Dungeon chronicles')` method, the value of the `books` property is an array `['The last kingdom', 'Dungeon chronicles', 'The guardian of dreams']`
After calling the `bookShelf.updateBook('The last kingdom', 'Dune')` method, the value of the `books` property is an array `['Dune', 'Haze', 'The guardian of dreams']`
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 36/41  Status: Done

/*
** THEORY
TASK. POTION SHOP "AT THE OLD TOAD"

** TASK
We were approached by the owner of the potions shop "At the Old Toad", he ordered a program for keeping an inventory - adding, removing, searching and updating potions. Add to the object atTheOldToad the property potions, the value of which is an empty array.

** Test
The variable atTheOldToad is declared
The value of the variable atTheOldToad is an object
The value of the atTheOldToad.potions property is an array []

 */

// Javascript Editor:
// START
/*
const atTheOldToad = {
  // Change code below this line
  
  // Change code above this line
};

*/

// Javascript Editor:
// FINISH
/*
const atTheOldToad = {
  // Change code below this line
  potions: [],
  // Change code above this line
};
console.log(atTheOldToad);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 36/41
The variable 'atTheOldToad' is declared
The value of the `atTheOldToad` variable is an object
The value of the `atTheOldToad.potions` property is an array `[]`

Result of code execution:
{ potions: [] }
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 37/41  Status: Done

/*
** THEORY
TASK. WE GET ALL THE POTIONS

** TASK
Add the getPotions() method to the atTheOldToad object, which simply returns the value of the potions property.

** Test
The variable atTheOldToad is declared
The value of the variable atTheOldToad is an object
The value of the atTheOldToad.potions property is the array ["Speed potion", "Dragon breath", "Stone skin"]
The value of the property atTheOldToad.getPotions is an object method
Calling the atTheOldToad.getPotions() method returns ["Speed potion", "Dragon breath", "Stone skin"]

 */

// Javascript Editor:
// START
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line

  // Change code above this line
};

*/

// Javascript Editor:
// FINISH
/*
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};

atTheOldToad.getPotions();
console.log(atTheOldToad.getPotions());
console.log(
*/

// RESULT
/*
Result

Done

Assignment 37/41
The variable 'atTheOldToad' is declared
The value of the `atTheOldToad` variable is an object
The value of the `atTheOldToad.getPotions` property is an object method
The value of the `atTheOldToad.potions` property is an array `['Speed potion', 'Dragon breath', 'Stone skin']`
Calling the `atTheOldToad.getPotions() `method returns `['Speed potion', 'Dragon breath', 'Stone skin']
Result of code execution:
[ 'Speed potion', 'Dragon breath', 'Stone skin' ]
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 38/41  Status: Done

/*
** THEORY
TASK: ADD A NEW POTION

** TASK
Modify the addPotion(potionName) method to add the potionName to the end of the potions array in the potions property.

** Test
The variable atTheOldToad is declared
The value of the variable atTheOldToad is an object
The value of the atTheOldToad.potions property is the array ["Speed potion", "Dragon breath", "Stone skin"]
The value of the property atTheOldToad.addPotion is an object method
After the first call to the atTheOldToad.addPotion("Invisibility") method, the potions property will contain the array ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
After the second call to the atTheOldToad.addPotion("Power potion") method, the potions property will contain the array ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

 */

// Javascript Editor:
// START
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line

    // Change code above this line
  },
};

*/

// Javascript Editor:
// FINISH
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName)
    // Change code above this line
  },
};

atTheOldToad.addPotion("Invisibility");

console.log(atTheOldToad.potions);
// array ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]

atTheOldToad.addPotion("Power potion");

console.log(atTheOldToad.potions);
// array ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]
console.log();
console.log(
*/

// RESULT
/*
Result

Done

Assignment 38/41
The variable 'atTheOldToad' is declared
The value of the `atTheOldToad` variable is an object
The value of the `atTheOldToad.addPotion` property is an object method
The value of the `atTheOldToad.potions` property is an array `['Speed potion', 'Dragon breath', 'Stone skin']`
After the first call to the `atTheOldToad.addPotion('Invisibility')` method, the `potions` property will contain an array `['Speed potion', 'Dragon breath', 'Stone skin', 'Invisibility']`
After the second call to the `atTheOldToad.addPotion('Power potion')` method, the `potions` property will contain an array `['Speed potion', 'Dragon breath', 'Stone skin', 'Invisibility', 'Power potion']`
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 39/41  Status: Done

/*
** THEORY
TASK: REMOVE THE POTION

** TASK
Complete the removePotion(potionName) method to remove the potionName potion from the potion array in the potions property.

** Test
The variable atTheOldToad is declared
The value of the variable atTheOldToad is an object
The value of the atTheOldToad.potions property is the array ["Speed potion", "Dragon breath", "Stone skin"]
The value of the property atTheOldToad.removePotion is an object method
After the first call to the atTheOldToad.removePotion("Dragon breath") method, the potions property will contain the array["Speed potion", Stone skin"]
After the second call to the atTheOldToad.removePotion("Speed potion") method, the potions property will contain the array ["Stone skin"]

 */

// Javascript Editor:
// START
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line

    // Change code above this line
  },
};

*/

// Javascript Editor:
// FINISH
/*
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
    // Change code above this line
  },
};

atTheOldToad.removePotion('Dragon breath');
console.log(atTheOldToad.potions);
// array["Speed potion", "Stone skin"]

atTheOldToad.removePotion('Speed potion');
console.log(atTheOldToad.potions);
// array["Stone skin"]

console.log(
*/

// RESULT
/*
The variable 'atTheOldToad' is declared
The value of the `atTheOldToad` variable is an object
The value of the `atTheOldToad.potions` property is an array `['Speed potion', 'Dragon breath', 'Stone skin']`
The value of the `atTheOldToad.removePotion` property is an object method
After the first call to the `atTheOldToad.removePotion('Dragon breath')` method, the `potions` property will contain an array `['Speed potion', Stone skin']`
After the second call to the `atTheOldToad.removePotion('Speed potion')` method, the `potions` property will contain an array `['Stone skin']`
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 40/41  Status: Done

/*
** THEORY
TASK: UPDATE THE POTION

** TASK
Complete the updatePotionName(oldName, newName) method so that it updates the potion name from oldName to newName in the potions array in the potions property.

** Test
The variable atTheOldToad is declared
The value of the variable atTheOldToad is an object
The value of the atTheOldToad.potions property is the array ["Speed potion", "Dragon breath", "Stone skin"]
The value of the property atTheOldToad.updatePotionName is an object method
After the first call of the atTheOldToad.updatePotionName("Dragon breath", "Polymorth") method the potions property will have the array ["Speed potion", "Polymorth", "Stone skin"]
After the second call of the atTheOldToad.updatePotionName("Stone skin", "Invisibility") method the potions property will have the array ["Speed potion", "Polymorth", "Invisibility"]

 */

// Javascript Editor:
// START
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line

    // Change code above this line
  },
};

*/

// Javascript Editor:
// FINISH
/*
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
console.log(atTheOldToad.potions);
// array ["Speed potion", "Polymorth", "Stone skin"]

atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
console.log(atTheOldToad.potions);
// array ["Speed potion", "Polymorth", "Invisibility"]

console.log(
*/

// RESULT
/*
The variable 'atTheOldToad' is declared
The value of the `atTheOldToad` variable is an object
The value of the `atTheOldToad.updatePotionName` property is an object method
The value of the `atTheOldToad.potions` property is an array `['Speed potion', 'Dragon breath', 'Stone skin']`
After the first call of the `atTheOldToad.updatePotionName('Dragon breath', 'Polymorph')` method, the `potions` property will have an array `['Speed potion', 'Polymorth', 'Stone skin']`
After the second call of the `atTheOldToad.updatePotionName('Stone skin', 'Invisibility')` method, the `potions` property will have an array `['Speed potion', 'Polymorth', 'Invisibility']`
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 41/41  Status: Done

/*
** THEORY
TASK: EXPANDING INVENTORY

** TASK
The customer wants each potion to be represented not only by the name, but also by the price, and in the future it may have other characteristics. Therefore, now an array of objects with the following properties will be stored in the potions property

{
  name: "Dragon breath",
  price: 700
}
Refactor the methods of the atTheOldToad object so that they work not with an array of strings, but with an array of objects.

getPotions() - method for getting all potions. Returns the value of the potions property.
addPotion(newPotion) - adds a potion newPotion (already an object) to the array in the potions property, but only if such a potion is not already in the inventory. Otherwise, a string is returned.
removePotion(potionName) - removes the potion object with the name potionName from the array in the potions property.
updatePotionName(oldName, newName) - updates the name property of the potion object with the name oldName to newName in the potions array.

** Test
// The variable atTheOldToad is declared
// The value of the variable atTheOldToad is an object

// The value of the atTheOldToad.getPotions property is an object method
// Calling the atTheOldToad.getPotions() method on the original object returns [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// The value of the atTheOldToad.addPotion property is an object method.
// // For the original object, after calling the atTheOldToad.addPotion({ name: "Invisibility", price: 620 }) method in the potions array, the last element will be this object
// For the original object, after calling the atTheOldToad.addPotion({ name: "Power potion", price: 270 }) method in the potions array, the last element will be this object

If the potion to be added already exists in the potions array, the addPotion method returns a string with the text from the source code
If the potion to be added already exists in the potions array, the addPotion method does not add the passed object to it
For the original object, after calling atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) the potions array is not changed
For the original object, after calling atTheOldToad.addPotion({ name: "Stone skin", price: 240 }) the potions array is not changed
For the original object, calling atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) returns the string "Error! Potion Dragon breath is already in your inventory!"
For the original object, calling atTheOldToad.addPotion({ name: "Stone skin", price: 240 }) returns the string "Error! Potion Stone skin is already in your inventory!"


The value of the atTheOldToad.removePotion property is an object method
For the original object, after calling the atTheOldToad.removePotion("Dragon breath") method the potions property will contain the array [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
For the original object, after calling the atTheOldToad.removePotion("Speed potion") method the potions property will contain the array [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
The value of the atTheOldToad.updatePotionName property is an object method
For the original object, after calling the atTheOldToad.updatePotionName("Dragon breath", "Polymorth") method the potions property will contain the array [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
For the original object, after calling the atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion") method the potions property will contain the array [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

 */

// Javascript Editor:
// START
/*
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        // return `Potion ${potionName} is not in inventory!`;
        this.potions.splice(i, 1);
      }
    }
  },

  updatePotionName(oldName, newName) {
    let result = `Potion ${oldName} is not in inventory`;
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        // result = `Found ${oldName} change to ${newName} `;
      }
    }
    return console.log(result);
  },
  // Change code above this line
};

console.log(
*/

// RESULT
/*
Result

Done

Assignment 41/41
The variable 'atTheOldToad' is declared
The value of the `atTheOldToad` variable is an object
The value of the `atTheOldToad.getPotions` property is an object method
The value of the `atTheOldToad.addPotion` property is an object method
The value of the `atTheOldToad.removePotion` property is an object method
The value of the `atTheOldToad.updatePotionName` property is an object method
Calling the `atTheOldToad.getPotions()` method on the original object returns `[ { name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 } ]`
For the original object, after calling the `atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })` method in the `potions` array the last item will be this object
For the original object, after calling the `atTheOldToad.addPotion({ name: 'Power potion', price: 270 })` method in the` potions` array the last item will be this object
If the potion to add is already in the `potions` array, the `addPotion` method returns the string with the text from the source code.
For the original object, calling `atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })` returns the string `'Error! Potion Stone skin is already in your inventory!'`.
For the original object, calling `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })` returns the string `'Error! Potion Dragon breath is already in your inventory!'`.
If the potion to add is already in the `potions` array, the `addPotion` method does not add the passed object to it.
For the original object, after calling `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`, the `potions` array is not changed.
For the original object, after calling the `atTheOldToad.removePotion('Dragon breath')` method, the `potions` property will contain an array `[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
For the original object, after calling the `atTheOldToad.removePotion('Speed potion')` method, the `potions` property will contain an array `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`
For the original object, after calling the `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')` method the `potions` property will contain an array `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
For the original object, after calling the `atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')` method the `potions` property will contain an array `[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]`
*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 00/41  Status: Done

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

console.log(
*/

// RESULT
/*

*/
