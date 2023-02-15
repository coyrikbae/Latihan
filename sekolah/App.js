/**
 * link: https://www.youtube.com/watch?v=D_G4TyZkZ5s
 */
let students = [
    { name: 'John', username: 'john', pass: 1111, gender: 'Male', marks: [50, 67, 74, 32, 89]},
    { name: 'Steve', username: 'steve', pass: 2222, gender: 'Male', marks: [28, 39, 32, 22, 79]},
    { name: 'Merry', username: 'merry', pass: 3333, gender: 'Female', marks: [78, 68, 43, 88, 32]},
    { name: 'Mike', username: 'mike', pass: 4444, gender: 'Male', marks: [44, 65, 34, 64, 54]},
    { name: 'Sarah', username: 'sarah', pass: 5555, gender: 'Female', marks: [34, 45, 23, 77, 28]}
];

// tampilkan function mengurutkan total marks students
function sortByTotalMarks(students) {
  students.sort((a, b) => {
    const totalMarksA = a.marks.reduce((total, score) => total + score, 0);
    const totalMarksB = b.marks.reduce((total, score) => total + score, 0);
    return totalMarksA - totalMarksB;
  });

  return students;
}

const sortedStudents = sortByTotalMarks(students);

sortedStudents.forEach((student) => {
  const totalMarks = student.marks.reduce((total, score) => total + score, 0);
  console.log(`${student.name} scored a total of ${totalMarks} marks.`);
});

// tampilkan function nilai rata-rata students
/*function calculateAverageMarks(students) {
  const averageMarks = students.map((student) => {
    const totalMarks = student.marks.reduce((total, score) => total + score, 0);
    const average = totalMarks / student.marks.length;
    return { name: student.name, averageMarks: average };
  });

  return averageMarks;
}

const averageMarks = calculateAverageMarks(students);

averageMarks.forEach((student) => {
  console.log(`${student.name} has an average of ${student.averageMarks} marks.`);
});*/

// function memasukan data student baru
/*function addStudent(students, newStudent) {
  return [...students, newStudent];
}

const newStudent = {
  name: 'Emily',
  username: 'emily',
  pass: 6666,
  gender: 'Female',
  marks: [90, 85, 95, 92, 88]
};

const updatedStudents = addStudent(students, newStudent);

console.log(updatedStudents);*/

// function validasi tambah students
function addStudent(students, newStudent) {
  // Check if the new student's name is empty or undefined
  if (!newStudent.name) {
    console.error("Error: Name is required for a new student");
    return students;
  }

  // Check if the new student's name already exists in the array
  if (students.some(student => student.name === newStudent.name)) {
    console.error("Error: A student with this name already exists in the array");
    return students;
  }

  // If both checks pass, create a new array with the new student object appended to the end
  return [...students, newStudent];
}

// Example usage
const newStudent = {
  name: '',
  username: 'newuser',
  pass: 1234,
  gender: 'Male',
  marks: [80, 85, 90, 75, 82]
};

// const updatedStudents = addStudent(students, newStudent);

// console.log(updatedStudents);

// function update marks students
function updateMarks(students, name, username, pass, newMarks) {
  // Find the index of the student with the given name
  const index = students.findIndex(student => student.name === name);

  // If the student is not found, log an error and return the original array
  if (index === -1) {
    console.error(`Error: Could not find student with name '${name}'`);
    return students;
  }

  // Create a new array with the updated marks for the student
  const updatedStudent = {
      ...students[index],
    username: username,
    pass: pass,
    marks: newMarks
  };

  return [
    ...students.slice(0, index),
    updatedStudent,
    ...students.slice(index + 1)
  ];
}

// Example usage
const updatedStudents = updateMarks(students, 'John', 'johndoe', 1122, [60, 75, 82, 45, 94]);

console.log(updatedStudents);

// function delete with warning message
/*function deleteStudent(students, index) {
  if (index >= 0 && index < students.length) {
    const confirmDelete = confirm(`Are you sure you want to delete ${students[index].name}?`);
    if (confirmDelete) {
      const deleted = students.splice(index, 1);
      console.log(`Deleted student ${deleted[0].name} at index ${index}`);
    } else {
      console.log(`Deletion cancelled.`);
    }
  } else {
    console.log(`Invalid index: ${index}`);
  }
}

deleteStudent(students, 2);*/