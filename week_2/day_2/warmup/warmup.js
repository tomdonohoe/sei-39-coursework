var shoppingList = [
    'salmon tins', 
    'ice-cream',
    'frozen berries',
    'pasta',
    'tomatoes',
    'spinach',
    'toilet paper',
];

// Show last threee
for (var i = 3; i > 0; i-- ) {
    console.log(shoppingList[shoppingList.length - i]);
};

// check for choc
var haveChoc = false;

for (var i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i] === 'chocolate') {
        haveChoc = true;
    };
};

if (haveChoc) {
    console.log("yes, if you do all your chores");
} else {
    console.log("no, it will rot your teeth");
};