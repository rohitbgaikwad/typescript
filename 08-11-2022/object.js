console.log("******************************* Assignment on object **************************************");
var Employee = { Emp_ID: 1, Emp_Name: "Rohit", Emp_salary: 50000, Emp_city: "pune" };
console.log(Employee);
console.log("******************************* Object Destructuring **************************************");
var ID = Employee.Emp_ID, Name = Employee.Emp_Name, salary = Employee.Emp_salary, city = Employee.Emp_city;
console.log("ID : ".concat(ID, "  Name : ").concat(Name, "  Salary : ").concat(salary, "  City : ").concat(city));
console.log("******************************* Traversing using for...in loop **************************************");
for (var key in Employee) {
    console.log(Employee[key]);
}
