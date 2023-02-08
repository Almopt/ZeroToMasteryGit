const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const arrayForEach = [];

const newArr = array.forEach( user => {
  user.username += '!';
  arrayForEach.push(user);
})

//Create an array using map that has all the usernames with a "? to each of the usernames
const newMapArray = array.map( user => user.username += '?');


//Filter the array to only include users who are on team: red
const newFilterArray = array.filter( user => user.team === 'red');

//Find out the total score of all users using reduce
const newReduceArray = array.reduce( (acc, user) => {
  return acc + user.score;
}, 0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonusArray = array.map( user => {
  user.items = user.items.map( item => item+='!');
  return user;
});

// Classes

class Animal {

  constructor(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
  }

}

class Mamal extends Animal{

  constructor(name, type, color) {
    super(name, type, color);
  }

  sound() {
    console.log(`MOOOO! I'm a ${this.type}, my name is ${this.name} and I'm ${this.color}`);
  }

}

const cow = new Mamal('Alberta', 'cow', 'white');
cow.sound();

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah', 'John'];
dragons.includes('J');


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter( dragonName => dragonName.includes('John'))


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = x => x**100;


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
//'my name is Rudolf the raindeer'

Object.entries(obj).map( value => value.join(" ")).join(" ");


// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArrayy = array.flat(5);
console.log(newArrayy);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const array2 = greeting.flatMap( string => string.join(" "));
console.log(array2);


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const array2 = greeting.flatMap( string => string.join(" ")).join(" ");
console.log(array2);


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));



//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trimStart());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const newUsers = Object.entries(users);


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const newUsers2 = newUsers.map( array => {
  array[1] *= 2;
  return array
} );

const newUsers2V2 = newUsers.map( array => [array[0], array[1] * 2] );

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
console.log(Object.fromEntries(newUsers2));








