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


let r2 = document.getElementById("2")
let r3 = document.getElementById("3")
let r4 = document.getElementById("4")
let r5 = document.getElementById("5")
let tfoo = document.getElementById("tfoo")
let totalArrRe =[]
let callingArray = [AdministrationNumberOfEmp,marketingNumberOfEmp,developmentNumberOfEmp,financeNumberOfEmp]
let elemetArray = [r2,r3,r4,r5]

function calling(eleArr,objArr) {
    for (let i = 0; i < eleArr.length; i++) {
        numRender(eleArr[i],objArr[i])
        sumSalaryRender(eleArr[i],objArr[i])
        avSalaryRender(eleArr[i],objArr[i])
    }
    
}

total(callingArray)

calling(elemetArray,callingArray)

totalRender(totalArrRe)

function sumNum (arr) {
    let sum = 0;
    arr.forEach(element => {
        sum ++ ;
    });
    return sum 
}

function avSalary (arr) {
    let sum = 0;
    let ca =0
    arr.forEach(element => {
        sum += element.salary;
        ca ++
    });
    return sum / ca;
}

function sumSalary (arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element.salary;
    });
    return sum 
}


function total (arr) {

    let sumNumAll = 0
    let sumSalAll = 0
    let sumAvALL = 0

    for (let i = 0; i < arr.length; i++) {
        sumNumAll += sumNum (arr[i])
        sumSalAll +=  sumSalary (arr[i])
        sumAvALL +=  avSalary (arr[i])
        
    }
    return totalArrRe = [sumNumAll , sumSalAll , sumAvALL]
  
}

console.log(totalArrRe);

function numRender (pnt,arr) {
    let chld = document.createElement('td')
    chld.textContent = `${sumNum(arr)}`
    pnt.appendChild(chld)
    
}

function sumSalaryRender (pnt,arr) {
    let chld = document.createElement('td')
    chld.textContent = `${sumSalary(arr) }`
    pnt.appendChild(chld)
}
     
function avSalaryRender (pnt,arr) {
    let chld = document.createElement('td')
    chld.textContent = `${avSalary(arr).toFixed(1) }`
    pnt.appendChild(chld)
}
     
function totalRender (arr) {
    for (let i = 0; i < arr.length-1; i++) {

        let chld = document.createElement('td')
        chld.textContent = `${arr[i]}`
        tfoo.appendChild(chld)
        }
        let chld = document.createElement('td')
        chld.textContent = `${arr[2].toFixed(1)}`
        tfoo.appendChild(chld) 
}


