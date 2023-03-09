'use strict';

console.log("ok");

const allEmoloyees = []

function Employee(EmployeeId, fullName, department, Level, image, salary) {
  this.EmployeeId = EmployeeId;
  this.fullName = fullName;
  this.department = department;
  this.Level = Level;
  this.image = image;
  this.salary = this.salary();
  allEmoloyees.push(this)
}



Employee.prototype.salary = function() {
  if (this.Level === "Senior") { return SalaryCalc(1500, 2000) }
  else if (this.Level === "Mid-Senior") { return SalaryCalc(1000, 1500) }
  else if (this.Level === "Junior") { return SalaryCalc(500, 1000) }
}

Employee.prototype.netSalary = function() {
  return this.salary - (this.salary * 0.075)
}

Employee.prototype.render = function() {
  let employeeCard = document.write(`
    <h3>${this.fullName}</h3>
    <p>Salary: ${this.salary}</p>
  `);
  return employeeCard;
}

const SalaryCalc = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}


const ghaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior");

const lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior");

const tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");

const safiwalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");

const omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior");

const ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior");

const hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");


objectMethods(allEmoloyees)

console.log(allEmoloyees);






function objectMethods (arr) {
for (let i = 0; i < arr.length; i++) {
  arr[i].render()
  arr[i].netSalary()
  
}
}

