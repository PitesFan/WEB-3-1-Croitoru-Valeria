let students = [
  {
    id: 1,
    name: "Valeria Croitoru",
    age: 18,
    group: "DAW-241",
    major: "Web development",
  },
  {
    id: 2,
    name: "Valeria Croitoru",
    age: 18,
    group: "DAW-241",
    major: "Web development",
  },
  {
    id: 3,
    name: "Valeria Croitoru",
    age: 18,
    group: "DAW-241",
    major: "Web development",
  },
  {
    id: 4,
    name: "Valeria Croitoru",
    age: 18,
    group: "DAW-241",
    major: "Web development",
  },
  {
    id: 5,
    name: "Valeria Croitoru",
    age: 18,
    group: "DAW-241",
    major: "Web development",
  },
  {
    id: 6,
    name: "Valeria Croitoru",
    age: 18,
    group: "DAW-241",
    major: "Web development",
  },
];

let nextId = 7;

const sl = document.getElementById("studentList");
const count = document.getElementById("count");
const error = document.getElementById("error");

const addStudentHTML = (student) => {
  const card = document.createElement("div");
  card.className = "student";
  sl.appendChild(card);

  const avatar = document.createElement("img");
  avatar.className = "student-img";
  avatar.setAttribute("src", "avatar.png");
  card.appendChild(avatar);

  const name = document.createElement("p");
  name.className = "name";
  name.innerText = student.name;
  card.appendChild(name);

  const group = document.createElement("p");
  group.innerText = student.group;
  card.appendChild(group);

  const ageLabel = document.createElement("p");
  ageLabel.className = "label";
  ageLabel.innerText = "Age:";
  card.appendChild(ageLabel);

  const age = document.createElement("p");
  age.className = "value";
  age.innerText = student.age;
  card.appendChild(age);

  const majorLabel = document.createElement("p");
  majorLabel.className = "label";
  majorLabel.innerText = "Major:";
  card.appendChild(majorLabel);

  const major = document.createElement("p");
  major.className = "value";
  major.innerText = student.major;
  card.appendChild(major);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => {
    deleteStudent(student.id);
  });
  card.appendChild(deleteBtn);
};

const addStudentsHTML = () => {
  sl.innerHTML = "";
  count.innerText = students.length;

  if (students.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "The list is empty. No students.";
    sl.appendChild(msg);
    return;
  }

  students.forEach((student) => addStudentHTML(student));
};

addStudentsHTML();

const form = document.getElementById("addElev");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const ageText = document.getElementById("age").value.trim();
  const major = document.getElementById("major").value.trim();
  const group = document.getElementById("group").value.trim();
  const age = Number(ageText);

  if (name === "" || ageText === "" || major === "" || group === "") {
    error.innerText = "Please fill in all fields!";
    return;
  }
  if (!Number.isInteger(age) || age < 14 || age > 100) {
    error.innerText = "Age must be an integer between 14 and 100!";
    return;
  }

  students.push({
    id: nextId,
    name: name,
    age: age,
    group: group,
    major: major,
  });
  nextId++;

  error.innerText = "";
  form.reset();
  addStudentsHTML();
});

function deleteStudent(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      students.splice(i, 1);
      break;
    }
  }
  addStudentsHTML();
}

const justifyValue = document.getElementById("justify-content");
justifyValue.addEventListener("change", () => {
  sl.style.justifyContent = justifyValue.value;
});

const alignValue = document.getElementById("align-items");
alignValue.addEventListener("change", () => {
  sl.style.alignItems = alignValue.value;
});

const wrapValue = document.getElementById("wrap");
wrapValue.addEventListener("change", () => {
  sl.style.flexWrap = wrapValue.checked ? "wrap" : "nowrap";
});

const gapValue = document.getElementById("numberIn");
const submitGap = document.getElementById("submitNumber");
submitGap.addEventListener("click", () => {
  if (gapValue.value !== "") {
    sl.style.gap = gapValue.value + "px";
  }
});
