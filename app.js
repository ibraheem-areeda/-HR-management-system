'use strict';

console.log("ok");

function Employee(EmployeeId, fullName, department, Level, image, salary) {
  this.EmployeeId = EmployeeId;
  this.fullName = fullName;
  this.department = department;
  this.Level = Level;
  this.image = image;
  this.salary = this.salary();
}

const SalaryCalc = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
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
    <p>Department: ${this.department}</p>
    <p>Level: ${this.Level}</p>
    <p>Salary: ${this.salary}</p>
  `);
  return employeeCard;
}



const ghaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
ghaziSamer.netSalary();
ghaziSamer.render();


const lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior");
lanaAli.netSalary();
lanaAli.render();


const tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
tamaraAyoub.netSalary();
tamaraAyoub.render();

const safiwalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
safiwalid.netSalary();
safiwalid.render();

const omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior");
tamaraAyoub.netSalary();
tamaraAyoub.render();

const ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior");
tamaraAyoub.netSalary();
tamaraAyoub.render();

const hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
tamaraAyoub.netSalary();
tamaraAyoub.render();



