// The constructor - like a class, but actually, not really


function Employee(username, skills, basic_salary) {
  this.username = username;
  this.skills = skills;
  this.basic_salary = basic_salary;

  this.printdetails = function() {
    document.write(" Employee Name is : "+this.username);
    document.write(" <br> Employee skills are : "+this.skills);
    document.write(" <br> Employee basic_salary is : "+this.basic_salary);
  };
  this.changesalary=function(salary){
      this.basic_salary=salary;
  }
}

// Use it like this:
var emp = new Employee('naveen', 'c,c#,js',1000);
emp.changesalary(7000);
emp.printdetails();