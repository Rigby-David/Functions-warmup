const colors = ['red', 'blue', 'green', 'yellow']

console.log(colors[1]);
// Using its index value in colors, console.log 'blue'

colors.push("purple"); // this is a call on the array
console.log(colors);
console.log(colors[4]);
// add the value 'purple' to the end of the colors array
// console.log the result

const benny = {
  name: 'Benny',
  age: 6,
  breeds: ['Terrier', 'Chihauhau', 'Pekingese']
}

console.log(benny.name);
console.log(benny.age);
console.log(benny.name,benny.age);
// Using dot notation, console.log the name and age of Benny

console.log(benny.breeds[1]);
// what if i wanted to loop through all benny's names and loop through them
for (let breed of benny.breeds){
  console.log(breed);
}
// Using dot notation, console.log any one of Benny's breeds

console.log("============ Question 5 ============")
// Add code to the whisper function so that it takes whatever string is given to it
// and returns an all lower case version

function whisper(word){
  return word.toLowerCase(); // this is a call on the array
}
// return values are like when you place an order for a burger the return is getting the burger back
// functions are like machines on a belt where you
//  we're putting in a word with all uppercase and getting all lowercase
// toLowerCase is a string method
// method means you actually call it using a . on the data type itself

console.log(`this should print true: ${whisper('Hello') === 'hello'}`)
console.log(`this should print true: ${whisper('BOOGERS') === 'boogers'}`)


console.log("============ BONUS      ============")

const dogs = [{
  name: 'Benny',
  age: 6,
  breeds: ['Terrier', 'Chihauhau', 'Pekingese']
},
{
  name: 'Finley',
  age: 2,
  breeds: ['Golden Retriever', 'Standard Poodle']
},
{
  name: 'Ruby',
  age: 4,
  breeds: ['Unknown Mix']
}]

console.log(dogs[0].name);
console.log(dogs[1].name);
//
// Using index values and dot notation, console.log each dog's name
console.log(dogs[0].breeds[0]);
console.log("============ BONUS -- 2 ============")
// Using index values and dot notation, console.log the first breed of each dog
console.log(`${dogs[0].name} is ${dogs[0].age} years old`);
console.log("============ BONUS -- 3 ============")
// Using template literals, print the following string
// Benny is 6 years old
