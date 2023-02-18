/*
const students = [
      { id: 1, name: 'John', username: 'john', pass: 1111, gender: 'Male', address: 'Jl. Tongkol', marks: [50, 67, 74, 32, 89] },
      { id: 2, name: 'Steve', username: 'steve', pass: 2222, gender: 'Male', address: 'Jl. Bandeng', marks: [28, 39, 32, 22, 79] },
      { id: 3, name: 'Merry', username: 'merry', pass: 3333, address: 'Jl. Hiu', gender: 'Female', marks: [78, 68, 43, 88, 32] },
      { id: 4, name: 'Mike', username: 'mike', pass: 4444, gender: 'Male', address: 'Jl. Paus', marks: [44, 65, 34, 64, 54] },
      { id: 5, name: 'Sarah', username: 'sarah', pass: 5555, gender: 'Female', address: 'Jl. Pari', marks: [34, 45, 23, 77, 28] }
    ];
*/
class Person {
    constructor(id, name, username, pass, gender, address, marks) {
        this.id = id || 0;
        this.name = name || '';
        this.username = username || '';
        this.pass = pass || '';
        this.gender = gender || '';
        this.address = address || '';
        this.marks = marks || [];
    }
}
// const student = new Students();
/*class TKJ extends Rooms {
    constructor(id, name, username, pass, gender, address, marks, isStatus) { 
        super(id, name, username, pass, gender, address, marks);
        this.isStatus = isStatus || false;
    }
}
class Akuntansi extends Rooms {
    constructor(id, name, username, pass, gender, address, marks, isStatus) { 
        super(id, name, username, pass, gender, address, marks);
        this.isStatus = isStatus || false;
    }
}
class MM extends Rooms {
    constructor(id, name, username, pass, gender, address, marks, isStatus) { 
        super(id, name, username, pass, gender, address, marks);
        this.isStatus = isStatus || false;
    }
}*/

class School {
  constructor(students) {
    this.students = students || [];
  }

  registerStudent(...person) {
    // console.log(person);
    const [id, name, username, pass, gender, address, marks] = person;
    if (this.validateStudent(person)) {
        person.id = this.students.length + 1;
        this.students.push(new Person(id, name, username, pass, gender, address, marks));
        return console.log(`${id}. ${name}-${gender}`);
        // return true;
    } else {
        return false;
    }
  }

  validateStudent(id) {
        // validate id, name
    if (this.students.id === id) {
        console.log('Data id sudah ada.');
        return false;
    } else {
        return true;
    }
  }

  updateStudent(studentId, updatedStudent) {
    const index = this.students.findIndex(student => student.id === studentId);
    if (index === -1) {
      return false;
    }
    if (updatedStudent.name) {
      this.students[index].name = updatedStudent.name;
    }
    if (updatedStudent.username) {
      this.students[index].username = updatedStudent.username;
    }
    if (updatedStudent.pass) {
      this.students[index].pass = updatedStudent.pass;
    }
    if (updatedStudent.gender) {
      this.students[index].gender = updatedStudent.gender;
    }
    if (updatedStudent.address) {
      this.students[index].address = updatedStudent.address;
    }
    if (updatedStudent.marks) {
      this.students[index].marks = updatedStudent.marks;
    }
    return true;
  }

  deleteStudent(studentId) {
    const index = this.students.findIndex(student => student.id === studentId);
    if (index === -1) {
      return false;
    }
    this.students.splice(index, 1);
    return true;
  }

  getStudentsByCategory(category, sort) {
    // return this.student.filter(student => student.gender === category);
    // let filteredStudents = [];

    if (category === "Male") {
        this.students = this.students.filter((student) => student.gender === "Male");
    } else if (category === "Female") {
        this.students = this.students.filter((student) => student.gender === "Female");
    }

    if (sort === "asc") {
        this.students.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "desc") {
        this.students.sort((a, b) => b.name.localeCompare(a.name));
    }
    return students;
    
  }

  getStudentsWithTotalMarks() {
    return this.students.map(student => ({
      ...student,
      totalMarks: student.marks.reduce((acc, curr) => acc + curr, 0)
    }));
  }

  getStudentsWithAverageMarks() {
    return this.students.map(student => ({
      ...student,
      averageMarks: student.marks.reduce((acc, curr) => acc + curr, 0) / student.marks.length
    }));
  }
}
const school = new School();
/*
const students = [
      { id: 1, name: 'John', username: 'john', pass: 1111, gender: 'Male', address: 'Jl. Tongkol', marks: [50, 67, 74, 32, 89] },
      { id: 2, name: 'Steve', username: 'steve', pass: 2222, gender: 'Male', address: 'Jl. Bandeng', marks: [28, 39, 32, 22, 79] },
      { id: 3, name: 'Merry', username: 'merry', pass: 3333, address: 'Jl. Hiu', gender: 'Female', marks: [78, 68, 43, 88, 32] },
      { id: 4, name: 'Mike', username: 'mike', pass: 4444, gender: 'Male', address: 'Jl. Paus', marks: [44, 65, 34, 64, 54] },
      { id: 5, name: 'Sarah', username: 'sarah', pass: 5555, gender: 'Female', address: 'Jl. Pari', marks: [34, 45, 23, 77, 28] }
    ];
*/

school.registerStudent(1, 'John', 'john', '1111', 'Male', 'Jl. Tongkol', [50, 67, 74, 32, 89]);
school.registerStudent(2, 'Steve', 'steve', '2222', 'Male', 'Jl. Bandeng', [28, 39, 32, 22, 79]);
school.registerStudent(3, 'Merry', 'merry', '3333', 'Female', 'Jl. Hiu',  [78, 68, 43, 88, 32]);
school.registerStudent(4, 'Mike', 'mike', '4444', 'Male', 'Jl. Paus', [44, 65, 34, 64, 54]);
school.registerStudent(5, 'Sarah', 'sarah', '5555', 'Female', 'Jl. Pari', [34, 45, 23, 77, 28]);
// school.registerStudent(2, 'Steve', 'steve', '2222', 'Male', 'Jl. Bandeng', [28, 39, 32, 22, 79]);
// school.validateStudent(2);
school.getStudentsByCategory("Female", "desc");
// console.log(school.student[3].id);