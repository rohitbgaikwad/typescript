var a = "hello rohit";
console.log(a);
var b1 = true;
var b2 = false;
var b3;
function test() {
    return b3 = false; //interview question next statement not execute 
    console.log(b3);
}
console.log(test());
//any data type use object
var a1 = {
    name1: "Rohit",
    age: 25,
    city: "pune"
};
console.log(a1);
//homogenius array typescript
var n1 = ["angular"., "React", "java", "Node"];
n1[1] = "ganesh";
console.log(n1);
//Hetrogenius array use any
var n2 = [1, "rohit", true];
