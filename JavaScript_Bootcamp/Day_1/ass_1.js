/*
//Create an empty array called "fruits"

let fruits = [];

//Add the following fruits to the "fruits" array: "apple", "banana", "orange"

fruits.push("apple", "banana", "orange");

//Remove the first fruit from the array

fruits.splice(0,1);

//Add "grape" to the end of the array.

fruits.push("grape");

//Update the second fruit in the array to "pear"

fruits.splice(1,1, "pear");

console.log(fruits);
*/






/*
//Create an empty object called "person".

let person = {};

//Add the following properties to the "person" object:
//- name: "John"
//- age: 30
//- city: "New York"

person.name = "John";
person.age = 30;
person.city = "New York";


//Remove the "age" property from the "person" object.

delete person.age;

//Add a new property called "job" with the value "Engineer" to the "person" object.

person.job = "Engineer";

//Update the "city" property of the "person" object to "San Francisco".

person.city = "San Francisco";

console.log(person);
*/








//Create an empty array called "cars"

let cars = [];

//Add three car objects to the "cars" array

cars.push(
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Toyota", model: "Camry", year: 2018 }
  );


//Remove the first car object from the "cars" array

  cars.splice(0,1);


//Add a new car object to the "cars" array with the following properties:
   //- make: "Honda"
   //- model: "Civic"
   //- year: 2020

   cars.push({make: "Honda", model: "Civic", year: 2020})


  //Update the "model" property of the second car object in the array to "Accord"

  

  console.log (cars);
