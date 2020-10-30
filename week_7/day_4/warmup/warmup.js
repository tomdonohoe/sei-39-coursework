var map1 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","X","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
  ];
  // 2, 2

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];
// 1, 4

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];
// 4, 3

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];
// 0, 4


function treasureFinder(arrayOfArrays) {
    for (var i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i].includes('X')) {
            return [arrayOfArrays[i].indexOf('X'), i];
        }
    }
}


console.log(treasureFinder(map1));
console.log(treasureFinder(map2));
console.log(treasureFinder(map3));
console.log(treasureFinder(map4));