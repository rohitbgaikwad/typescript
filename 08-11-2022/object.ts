console.log("******************************* Assignment on object **************************************");
var Employee={Emp_ID:1,Emp_Name:"Rohit",Emp_salary:50000,Emp_city:"pune"}
console.log(Employee);
console.log("******************************* Object Destructuring **************************************");
var {Emp_ID:ID, Emp_Name:Name,Emp_salary:salary,Emp_city:city}=Employee;
console.log(`ID : ${ID}  Name : ${Name}  Salary : ${salary}  City : ${city}`);

console.log("******************************* Traversing using for...in loop **************************************");
for (const key in Employee) {
    console.log(Employee[key]);
       
         
     }

