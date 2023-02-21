// MENGUBAH ARRAY MENJADI STRING
// const staff = [{"id": 1, "nama": "dave", "gender": "male"}, {"id": 2, "nama": "jake", "gender": "male"}, {"id": 3, "nama": "mila", "gender": "female"}];

// const staffString = JSON.stringify(staff);

// console.log(staffString); // Output STRING: '[{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"}]'

// MENGUBAH STRING MENJADI ARRAY
const staffString = '[{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"}]';

const staffArray = JSON.parse(staffString);

console.log(staffArray); // Output ARRAY: [{id: 1, nama: "dave", gender: "male"}, {id: 2, nama: "jake", gender: "male"}, {id: 3, nama: "mila", gender: "female"}]

// UPDATE
const staff = [{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"}];

const updatedStaff = staff.map((employee, index) => {
  if (index === 0) {
    return { ...employee, nama: "David", gender: "male" };
  }
  return employee;
});

console.log(updatedStaff);
// Output: [{"id":1,"nama":"David","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"}]

// ADD OBJECT
// const staff = [{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"}];

const newEmployee = {"id": 4, "nama": "Alice", "gender": "female"};

staff.push(newEmployee);

console.log(staff);
// Output: [{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"},{"id":4,"nama":"Alice","gender":"female"}]

// FILTER
// const staff = [{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"}];

const maleStaff = staff.filter(employee => employee.gender === 'male');

console.log(maleStaff);
// Output: [{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"}]

// VALIDATION
// const staff = [{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"}];

const isDave = staff.some(employee => employee.nama === 'dave');

if (isDave) {
  console.log('Dave is in the staff array');
} else {
  console.log('Dave is not in the staff array');
}

// DELETE
// const staff = [{"id":1,"nama":"dave","gender":"male"},{"id":2,"nama":"jake","gender":"male"},{"id":3,"nama":"mila","gender":"female"}];

const deletedStaff = staff.filter(employee => employee.nama !== 'jake');

console.log(deletedStaff);
