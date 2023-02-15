/* Array Latihan */

// let score = [1, 2, 3, 4, 5];
// /* Cara menampilkan value array score dalam array */
// for (let i = 0; i < score.length; i++){
//     console.log(score[i]);
// }

// /* Cara menampilkan value array score dalam string */
// /* Pertama value array score di masukan kedalam pembungkus(temp) ber value/nilai string */
// let temp = "";
// for (let i = 0; i < score.length; i++){
//     temp += score[i];
// }
// console.log(temp);
// /* Cara melihat value/nilai pada pembungkus(temp) */
// console.log(typeof(temp));
// /* Convert value menjadi number cara ES5 */
// console.log(typeof Number(temp));

// /* Cara menjumlahkan value array score */
// /* Pertama value array score di masukan kedalam pembungkus(temp1) ber value/nilai number */
// let temp1 = 0;
// for (let i = 0; i < score.length; i++){
//     temp1 += score[i];
// }
// console.log(temp1);
// /* Cara melihat value/nilai pada pembungkus(temp) */
// console.log(typeof(temp1));

// /* Contoh array dua dimensi */
// let mhs = [
//     ["joko", 3.0, "kebon jeruk"],
//     ["andi", 3.5, "kelapa dua"],
//     ["susi", 2.0, "kembangan"]
// ]
// /* Menampilkan value array pada baris ke 0 kolum ke 2*/
// console.log(mhs[0][2]);
// /* Menampilkan seluruh value array mhs*/
// console.log(mhs);

// /* Mencari nilai Mean atau Rata-Rata (Average) */
// let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
// /* Pertama menampung array stats ke dalam pembungkus(total) ber value number */
// let total = 0;
// /* Cara menjumlahkan nilai array stats ke dalam pembungkus(total) ber value number */
// for (let i = 0; i < stats.length; i++) {
//     total += stats[i];
// }
// let mean = total / stats.length;
// /* Cara membulatkan angka di belakang koma .tofixed() */
// console.log("Mean: " + mean.toFixed(2));
// /* Cara melihat type value */
// console.log(typeof mean);
// console.log("Hasil value array stats di jumlahkan: " + total);
// /* Cara melihat jumlah nilai array stats */
// console.log(stats.length);

// /* Cara menampilkan value array stats */
// for (let i = 0; i < stats.length; i++) {
//     console.log(i+1 + '.', stats[i]);
// }

const zArr = [
    {
        id:1,
        nama:"andi",
        nilai:[90,10]
    },
    {
        id:2,
        nama:"susi",
        nilai:[70,30]
    },
    {
        id:3,
        nama:"budi",
        nilai:[20,60]
    },
];



// cara jumlah nilai dengan cepat
// const yArr = [12, 1, 34, 78, 109];
// nilai total di atas = 234
// let total = 0;
// function jumlah(element) {
//     total += element;
// }
// yArr.forEach(jumlah);
// console.log(total);
// console.log(typeof total);


// let a = 0;
// console.log(a);
// console.log(typeof a);
// a = '';
// console.log(a);
// console.log(typeof a);
// a = "";
// console.log(a);
// console.log(typeof a);
// a = [];
// console.log(a);
// console.log(typeof a);
// a = {};
// console.log(a);
// console.log(typeof a);


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
function deleteStudent(students, index) {
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

deleteStudent(students, 2);


// tampilkan jumlah marks student john
// const johnTotalMarks = students[0].marks.reduce((total, score) => total + score, 0);
// console.log(johnTotalMarks); // Output: 312

// tampilkan jumlah marks semua student
// students.forEach((student) => {
//   const totalMarks = student.marks.reduce((total, score) => total + score, 0);
//   console.log(`${student.name} scored a total of ${totalMarks} marks.`);
// });

// cara mengurutkan total marks students
// students.sort((a, b) => {
//   const totalMarksA = a.marks.reduce((total, score) => total + score, 0);
//   const totalMarksB = b.marks.reduce((total, score) => total + score, 0);
//   return totalMarksB - totalMarksA;
// });


// console.log(students[0].marks);
const maxMarks = 500;
function getTotalMarks(marks) {
    let totals = 0;

    for (let mark of marks) {
        totals += mark;
        // console.log(mark);
        // console.log(marks);
    }
    return totals;
}
// getTotalMarks(students.marks);

function displayStudents(studentArray) {
    studentArray.forEach(function (student) {
        let totalMarks = getTotalMarks(student.marks);
        let percentage = ((totalMarks / maxMarks) * 100).toFixed(0);
        let isPass = percentage >= 45 ? 'pass' : 'fail';
        // console.log(totalMarks);
        
        console.log(`${student.name}, ${student.gender}, ${totalMarks}, ${percentage}%, ${isPass}.`);
    });
}
// displayStudents(students);
