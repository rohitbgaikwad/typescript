var a:string="hello rohit";
console.log(a);


var b1:boolean=true;
var b2:boolean=false;
var b3:Boolean;
function test(){

    return b3=false;//interview question next statement not execute 
    console.log(b3);
}
console.log(test());
//any data type use object
let a1:any={
    name1:"Rohit",
    age:25,
    city:"pune",
}
console.log(a1);

//homogenius array typescript
let n1:Array<string>=["angular","React","java","Node"];
n1[1]="ganesh";
console.log(n1);

//Hetrogenius array use any
let n2:Array<any>=[1,"rohit",true];



