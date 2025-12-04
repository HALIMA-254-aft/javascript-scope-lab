// Write your solution in this file!
//global scope variables
//declare a variable in global scope called burgers and assign it the value hamburger and cheeseburger
//const burgers = ['hamburger', 'cheeseburger'];

//declare a variable in global scope called feautureDrink and assign it the value 'Strawberry Milkshake'.
//let featureDrink = 'Strawberry Milkshake';
//write a function named addBurger that when called, does the following in this exact order:
//creates a function scoped variable named newBurger and assign it the value 'Flatburger'
//uses the .push() array method to add the newBurger to the burgers array.
//function addBurger() {
  //let newBurger = 'Flatburger';
  //burgers.push(newBurger);
//}
// iif (true): write an if statement whose condition is true so that the code  in its block will always execute
//the code inside the if statemwewnt should do the following:
//create a block-scoped variable named anotherNewBurger and assign it the value 'Maple Bacon Burger'
//use the .push () array method to add anotherNewBurger to the burgers array
//if (true) {
  //let anotherNewBurger = 'Maple Bacon Burger';
  //burgers.push(anotherNewBurger);
//}
//write a function named changeFeatureDrink that when called, changes the value of the FeaturedDrink variable to 'The JavaShake.
//function changeFeatureDrink() {
  //featureDrink = 'The JavaShake';
//}

const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';
console.log(burgers);
console.log(featuredDrink);



function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}


if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
  
}