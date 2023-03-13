'use strict'

console.log("ok"); //check if the js connected

const allEmoloyees = [] // array contains objects created by the constractor

function Employee(EmployeeId, fullName, department, Level, image, salary) { // the constractor function
    this.EmployeeId = this.idMakeUnique(this);
    this.fullName = fullName
    this.department = department;
    this.Level = Level;
    this.image = image;
    this.salary = this.salary();
    allEmoloyees.push(this)
    allEmoloyeesIds.push(this.EmployeeId)
}


function idGenerator() {  // function for genarating a random number of 4 digits 
    let id = Math.floor(1000 + Math.random() * 9000)
    return id
}

const allEmoloyeesIds = [] // array to save the ids genirated by the idGenerator fuction when it called in this function 
Employee.prototype.idMakeUnique = function (arr) {
    let uniqueId = idGenerator() // calling idGenerator fuction
    for (let i = 0; i < arr.length; i++) {
        if (uniqueId === arr[i]) {
            uniqueId = idGenerator()  // to make sure it is unique
        }
    }
    return uniqueId // return the value to the construted obj because we call this function in the  ...
}

Employee.prototype.salary = function () {
    if (this.Level === "Senior") { return SalaryCalc(1500, 2000) }
    else if (this.Level === "Mid-Senior") { return SalaryCalc(1000, 1500) }
    else if (this.Level === "Junior") { return SalaryCalc(500, 1000) }
}

Employee.prototype.netSalary = function () {
    return this.salary - (this.salary * 0.075)
}

const SalaryCalc = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


















let dataArr = []
function gitData() {
    let data = localStorage.getItem("accData")
    console.log(data);
    let objEmoloyees = JSON.parse(data)
    console.log(objEmoloyees);




    if (objEmoloyees !== null) {
        for (let i = 0; i < objEmoloyees.length; i++) {




            dataArr.push(new Employee("id", objEmoloyees[i].fullName, objEmoloyees[i].department, objEmoloyees[i].Level, objEmoloyees[i].image, "salary"));

            if (dataArr[i].fullName !== allEmoloyees[i].fullName) {

                console.log("in if" + dataArr);
                dataArr[i].render()

            }

        }

        console.log(dataArr);
    }


}


gitData()




 let AdministrationNumberOfEmp =  dataArr.filter(function(arr){
   return arr.department === "Administration"
})
   
let marketingNumberOfEmp =  dataArr.filter(function(arr){
    return arr.department === "Marketing"
 })

 let developmentNumberOfEmp =  dataArr.filter(function(arr){
    return arr.department === "Development"
 })

 let financeNumberOfEmp =  dataArr.filter(function(arr){
    return arr.department === "Finance"
 })

// console.log(AdministrationNumberOfEmp);
// console.log(marketingNumberOfEmp);
// console.log(developmentNumberOfEmp);
// console.log(financeNumberOfEmp);


function avSalary (arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element.salary;
    });
    return sum / arr.length;
}

function sumSalary (arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element.salary;
    });
    return sum 
}



let adminAv = avSalary(AdministrationNumberOfEmp)
let marketingAv = avSalary(marketingNumberOfEmp)
let developmentAv = avSalary(developmentNumberOfEmp)
let financeAv = avSalary(financeNumberOfEmp)


let adminSum = avSalary(AdministrationNumberOfEmp)
let marketingSum = avSalary(marketingNumberOfEmp)
let developmentSum = avSalary(developmentNumberOfEmp)
let financeSum = avSalary(financeNumberOfEmp)




let numImp = document.getElementById("numImp")
let numMa = document.getElementById("numMa")
let numDe = document.getElementById("numDe")
let numFi = document.getElementById("numFi")



   let r2 = document.getElementById("2")
let r3 = document.getElementById("3")
let r4 = document.getElementById("4")

  

 function render () {

 

  
    numImp.textContent = `${AdministrationNumberOfEmp.length}`
  numImp.appendChild(r2)

  numMa.textContent = `${marketingNumberOfEmp.length}`
  numMa.appendChild(r3)

  numImp.textContent = `${AdministrationNumberOfEmp.length}`
  numImp.appendChild(r2)

  numImp.textContent = `${AdministrationNumberOfEmp.length}`
  numImp.appendChild(r2)


}

render ()