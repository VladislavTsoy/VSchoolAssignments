var employees = []

function Employee(name, job, salary, status) {
    this.name = name
    this.job = job
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function() {
        console.log(`Name: ${this.name}, Job Title: ${this.job}, Salary: $${this.salary}/hour, Status: ${this.status}`)
    }
}

var bob = new Employee('Bob', 'Lead-instructor', 200, 'Full-time')
var nate = new Employee('Nate', 'JavaScript-instructor', 150, 'Full-time')
var marcus = new Employee('Marcus', 'CSS-instructor', 150, 'Full-time')

employees.push(bob)
employees.push(nate)
employees.push(marcus)

nate.status = 'Part-time'

for(var i = 0; i < employees.length; i++){
    employees[i].printEmployeeForm();
}




