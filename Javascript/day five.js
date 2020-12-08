//How to Check if Two Objects Have Equal Values//

// const isEqual = (obj1, obj2) => {
//   const obj1Keys = Object.keys(obj1);
//   const obj2Keys = Object.keys(obj2);

//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }

//   for (let objKey of obj1Keys) {
//     if (obj1[objKey] !== obj2[objKey]) {
//       return false;
//     }
//   }

//   return true;
// };

// const obj1 = {
//   name: "Kristine",
//   age: 13,
//   favorites: {
//     food: "Pizza",
//     vacation: "Disneyland"
//   }
// };

// const obj2 = {
//   name: "Kristine",
//   age: 13,
//   favorites: {
//     food: "Pizza",
//     vacation: "Disneyland"
//   }
// };

// obj1 == obj2;
// isEqual(obj1, obj2);

// Object Oriented Programming in JavaScript Section Introduction //
//Guide to JavaScript OOP Instance Methods//

// class Instructor {
//   constructor({ name, role = 'assistant' }) {
//     this.name = name;
//     this.role = role;
//   }

//   renderDetails() {
//     console.log(`${this.name}: ${this.role}`);
//   }
// }

// const jon = new Instructor({name: 'Jon Snow'});
// const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
// jon.renderDetails();
// brayden.renderDetails();

// Guide to OOP Static Methods in JavaScript
 //

// class Instructor {
//   constructor({ name, role = "assistant" }) {
//     this.role = role;
//     this.name = name;
//   }

//   // Instance method
//   renderDetails() {
//     console.log(`${this.name} - ${this.role}`);
//   }

//   // Base case static method
//   static helloWorld() {
//     console.log('Hi there');
//   }

//   // Static method
//   static canTeach(instructor) {
//     return (instructor.role === 'classroom');
//   }
// }

// let juniorInstructor = new Instructor({ 'name' : 'Brian' });
// let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

// juniorInstructor.renderDetails(); // "Brian - assistant"
// seniorInstructor.renderDetails(); // "Alice - classroom"

// Instructor.helloWorld(); // "Hi there"

// // "Brian can teach: false"
// console.log(
//   `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
// );

// // "Alice can teach: true"
// console.log(
//   `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
// );

// JSON Parsing Guide for API Development //

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true

// Introduction to JavaScript Promises //
let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello....')
  }, 2000);

  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

//How to Group Promises Together with Promise.all in JavaScript//

const greeting = new Promise((resolve, reject) =>{
  resolve('Hi there');
  reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});

const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => {
  res.forEach(activity => {
    console.log(activity);
  })
})