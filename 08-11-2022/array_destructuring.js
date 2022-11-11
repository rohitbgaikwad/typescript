console.log("******************************* Given array **************************************");
var array = ["J&j", "pfizer", "Sputnik",];
console.log(array);
console.log("******************************* Add one element \"covaxin\" *****************************");
array.push("Covaxin");
console.log(array);
console.log("******************************* Traverse array using for of loop *****************************");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var uu = array_1[_i];
    console.log(uu);
}
console.log("******************************* Destructuring Array *****************************");
var a = array[0], b = array[1], c = array[2], d = array[3];
console.log(a, b, c, d);
