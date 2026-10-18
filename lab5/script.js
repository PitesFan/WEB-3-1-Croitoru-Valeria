let students = [
  {
    id: 1,
    name: "Valeria Croitoru",
    age: "18",
    group: "DAW-241",
    major: "Web Application Development",
    avatar: "🐱",
  },
];

let nextId = 2;

const displayStudents = () => {
  const cardsSection = document.getElementById("cards-section");
  cardsSection.innerHTML = "";

  if (students.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No students in the list.";
    cardsSection.appendChild(msg);
    updateCount();
    return;
  }

  students.forEach((student) => {
    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h3");
    name.textContent = student.name;

    const group = document.createElement("p");
    group.textContent = "Group: " + student.group;

    const age = document.createElement("p");
    age.textContent = "Age: " + student.age + " years";

    const major = document.createElement("p");
    major.textContent = "Major: " + student.major;

    const avatar = document.createElement("p");
    avatar.textContent = student.avatar;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteStudent(student.id));

    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(group);
    card.appendChild(age);
    card.appendChild(major);
    card.appendChild(delBtn);

    cardsSection.appendChild(card);
  });

  updateCount();
};

const addStudent = () => {
  const nameVal = document.getElementById("student-name").value.trim();
  const ageVal = document.getElementById("student-age").value.trim();
  const groupVal = document.getElementById("student-group").value.trim();
  const majorVal = document.getElementById("student-major").value.trim();
  const avatarVal = document.getElementById("student-avatar").value.trim();

  if (!nameVal || !ageVal || !groupVal || !majorVal || !avatarVal) {
    alert("All fields must be filled in!");
    return;
  }

  const ageNum = Number(ageVal);
  if (!Number.isInteger(ageNum) || ageNum < 14 || ageNum > 100) {
    alert("Age must be an integer between 14 and 100!");
    return;
  }

  students.push({
    id: nextId++,
    name: nameVal,
    age: ageVal,
    group: groupVal,
    major: majorVal,
    avatar: avatarVal,
  });

  document.getElementById("student-name").value = "";
  document.getElementById("student-age").value = "";
  document.getElementById("student-group").value = "";
  document.getElementById("student-major").value = "";
  document.getElementById("student-avatar").value = "";

  displayStudents();
};

const deleteStudent = (id) => {
  students = students.filter((s) => s.id !== id);
  displayStudents();
};

const updateCount = () => {
  document.getElementById("student-count").textContent =
    "Students: " + students.length;
};

const applyFlex = () => {
  const cardsSection = document.getElementById("cards-section");
  cardsSection.style.display = "flex";
  cardsSection.style.justifyContent =
    document.getElementById("justify-select").value;
  cardsSection.style.alignItems = document.getElementById("align-select").value;
  cardsSection.style.flexWrap = document.getElementById("wrap-select").value;
  cardsSection.style.gap = document.getElementById("gap-input").value + "px";
};

document.getElementById("add-btn").addEventListener("click", addStudent);

document.getElementById("justify-select").addEventListener("change", applyFlex);
document.getElementById("align-select").addEventListener("change", applyFlex);
document.getElementById("wrap-select").addEventListener("change", applyFlex);

document.getElementById("gap-input").addEventListener("input", (e) => {
  document.getElementById("gap-value").textContent = e.target.value;
  applyFlex();
});

applyFlex();
displayStudents();
