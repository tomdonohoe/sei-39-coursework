// Exercise 1:
console.log('============\nExercise 1\n============');

var myFavouriteRecipe = {
    title: 'Burger',
    servings: 1,
    ingredients: [
        'Bun', 
        'Sauce', 
        'Lettuce', 
        'Tomato',
        'Beetroot',
        'Onion',
        'Cheese'
    ],
};

console.log(`- ${myFavouriteRecipe.title}`);
console.log(`- Serves: ${myFavouriteRecipe.servings}`);
console.log(`- Ingredients:`);
var counter = 0;
while (counter < myFavouriteRecipe.ingredients.length) {
    console.log(` - ${myFavouriteRecipe.ingredients[counter]}`);
    counter++
}

// Exercise 2:
console.log('============\nExercise 2\n============');

var myFavouriteHobbies = ['Golf', 'MTB', 'Cycling', 'Swimming'];
var i = 0;
var choice = 1;

while (i < myFavouriteHobbies.length) {
    if (choice == 1 || choice == 21 || choice == 31) {
        console.log(`My ${choice}st choice is ${myFavouriteHobbies[i]}`);
    } else if (choice == 3 || choice == 23) {
        console.log(`My ${choice}rd choice is ${myFavouriteHobbies[i]}`);
    } else if (choice == 2 || choice == 22) {
        console.log(`My ${choice}nd choice is ${myFavouriteHobbies[i]}`);
    } else {
        console.log(`My ${choice}th choice is ${myFavouriteHobbies[i]}`);
    }
    i++
    choice++
}