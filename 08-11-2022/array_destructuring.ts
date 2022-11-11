console.log("******************************* Given array **************************************");
var array =["J&j","pfizer","Sputnik",];
console.log(array);

console.log(`******************************* Add one element "covaxin" *****************************`);
array.push("Covaxin");
console.log(array);

console.log(`******************************* Traverse array using for of loop *****************************`);
for (const uu of array) {
    console.log(uu);
    
}

console.log(`******************************* Destructuring Array *****************************`);

var [a,b,c,d]=array;
console.log(a,b,c,d);