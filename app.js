'use strict';

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

console.log(allEmoloyees);

function idGenerator() {  // function for genarating a random number 
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


const ghaziSamer = new Employee("id", "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");

const lanaAli = new Employee("id", "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");

const tamaraAyoub = new Employee("id", "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");

const safiwalid = new Employee("id", "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");

const omarZaid = new Employee("id", "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");

const ranaSaleh = new Employee("id", "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");

const hadiAhmad = new Employee("id", "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");


let form = document.getElementById("form")
form.addEventListener("submit", submitForm);

function submitForm(event) {
  // event.preventDefault()
  console.log(event);
  let formFullName = event.target[0].value
  let formDepartment = event.target[1].value
  let formlevel = event.target[2].value
  let formimg = event.target[3].value
  // console.log(formFullName,formDepartment,formlevel,formimg);
  const formconst = new Employee("id", formFullName, formDepartment, formlevel, formimg, "salary");
  formconst.render()
  console.log(formconst);
  console.log(allEmoloyees);


  let formData = JSON.stringify(allEmoloyees)
  // console.log(formData);

  localStorage.setItem("newEmp", formData)

}



// dont render the same name 




let employeesIdDev = document.getElementById("employeesIdDev")

Employee.prototype.render = function () {

  let employeesIdDevCard = document.createElement('dev')
  employeesIdDevCard.setAttribute("id", "Div1")
  employeesIdDevCard.classList.add('dev1')

  let imgRender = document.createElement('img')
  imgRender.src = this.image
  employeesIdDevCard.appendChild(imgRender)


  imgRender.classList.add('the-div');

  let fullNameRender = document.createElement('h3')
  fullNameRender.textContent = `Name : ${this.fullName} - ID: ${this.EmployeeId} `
  employeesIdDevCard.appendChild(fullNameRender)

  let departmentRender = document.createElement('h3')
  departmentRender.textContent = `Department : ${this.department} - Level: ${this.Level} `
  employeesIdDevCard.appendChild(departmentRender)

  let idRender = document.createElement('h3')
  idRender.textContent = `${this.EmployeeId}`
  employeesIdDevCard.appendChild(idRender)



  employeesIdDev.appendChild(employeesIdDevCard)

}


function objectMethods() {
  for (let i = 0; i < allEmoloyees.length; i++) {
    allEmoloyees[i].render()
    allEmoloyees[i].netSalary()

  }
}

objectMethods()

let finalArr = []



let trueArr = [ ghaziSamer , lanaAli , tamaraAyoub , safiwalid , omarZaid , ranaSaleh , hadiAhmad]
console.log(trueArr);



function gitData() {
  let lsAllEmoloyees = localStorage.getItem("newEmp")
  // console.log(lsAllEmoloyees);
  let objEmoloyees = JSON.parse(lsAllEmoloyees)
  // console.log(objEmoloyees);




  if (objEmoloyees !== null) {
    for (let i = 0; i < objEmoloyees.length; i++) {
      
        
      
      
      finalArr.push(new Employee("id", objEmoloyees[i].fullName, objEmoloyees[i].department, objEmoloyees[i].Level, objEmoloyees[i].image, "salary"));

      if (finalArr[i].fullName !== allEmoloyees[i].fullName) {

        console.log("in if" + finalArr);
        finalArr[i].render()
        trueArr.push(finalArr[i])
      }  

    }  

    console.log(finalArr);
 
  }  


}  



gitData()

function setToLocalMemory () {
 


    let dataToAccJsonEm = JSON.stringify(trueArr)
    let dataToAcc = localStorage.setItem( "accData" , dataToAccJsonEm)
    console.log(trueArr);


}



setToLocalMemory ()