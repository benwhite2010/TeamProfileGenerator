// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    name = this.name;
    email = this.email;
    id = this.id;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// export the Employee object
module.exports = Employee;
