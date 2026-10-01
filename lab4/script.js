// 1:
let fruits = ["Apple", "Pear", "Banana", "Orange", "Kiwi"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

// 2:
let cities = ["Chisinau", "Balti", "Cahul"];
cities.push("Orhei");
cities.unshift("Soroca");
console.log(cities);
cities.pop();
cities.shift();
console.log(cities);

// 3 and 4:
let products = ["Bread", "Milk", "Eggs"];

let productInput = document.getElementById("product-input");
let productBtnStart = document.getElementById("product-btn-start");
let productBtnEnd = document.getElementById("product-btn-end");
let productBtnDelStart = document.getElementById("product-btn-del-start");
let productBtnDelEnd = document.getElementById("product-btn-del-end");
let productList = document.getElementById("product-list");

function displayProducts() {
  if (products.length === 0) {
    productList.textContent = "The list is empty!";
    return;
  }
  productList.textContent = products.join(" | ");
}

productBtnEnd.addEventListener("click", function () {
  let value = productInput.value;
  if (value === "") return;
  products.push(value);
  productInput.value = "";
  displayProducts();
});

productBtnStart.addEventListener("click", function () {
  let value = productInput.value;
  if (value === "") return;
  products.unshift(value);
  productInput.value = "";
  displayProducts();
});

productBtnDelStart.addEventListener("click", function () {
  products.shift();
  displayProducts();
});

productBtnDelEnd.addEventListener("click", function () {
  products.pop();
  displayProducts();
});

displayProducts();

// 5:
let students = [
  { name: "Popescu Ana", age: 17, grade: 9 },
  { name: "Rusu Mihai", age: 18, grade: 8 },
  { name: "Ciobanu Maria", age: 17, grade: 10 },
];

let studentsCount = document.getElementById("students-count");
let catalog = document.getElementById("catalog");

let studentName = document.getElementById("student-name");
let studentAge = document.getElementById("student-age");
let studentGrade = document.getElementById("student-grade");
let studentAdd = document.getElementById("student-add");

let studentDeleteName = document.getElementById("student-delete-name");
let studentDelete = document.getElementById("student-delete");

let studentSearchName = document.getElementById("student-search-name");
let studentSearch = document.getElementById("student-search");
let studentResult = document.getElementById("student-result");

function displayStudents() {
  studentsCount.textContent = "Number of students: " + students.length;
  catalog.textContent = "";
  students.forEach(function (student, index) {
    let p = document.createElement("p");
    p.textContent =
      index +
      1 +
      ". " +
      student.name +
      " Age: " +
      student.age +
      " Grade: " +
      student.grade;
    catalog.appendChild(p);
  });
}

studentAdd.addEventListener("click", function () {
  let name = studentName.value;
  let age = studentAge.value;
  let grade = studentGrade.value;
  if (name === "" || studentAge.value === "" || studentGrade.value === "")
    return;
  let newStudent = { name: name, age: age, grade: grade };
  students.push(newStudent);
  studentName.value = "";
  studentAge.value = "";
  studentGrade.value = "";
  displayStudents();
});

studentDelete.addEventListener("click", function () {
  let name = studentDeleteName.value;
  let index = students.findIndex(function (student) {
    return student.name === name;
  });
  if (index !== -1) {
    students.splice(index, 1);
  }
  studentDeleteName.value = "";
  displayStudents();
});

studentSearch.addEventListener("click", function () {
  let name = studentSearchName.value;
  let found = students.find(function (student) {
    return student.name === name;
  });
  if (found) {
    studentResult.textContent =
      "Student found! Name: " +
      found.name +
      " Age: " +
      found.age +
      " Grade: " +
      found.grade;
  } else {
    studentResult.textContent = "Student not found!";
  }
});

displayStudents();
