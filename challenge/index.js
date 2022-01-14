
const reprove = 0;
const aprove = 1;
const setReprove = () => (row.style.backgroundColor = "red");

const sendForms = document.getElementById("add");
const table = document.getElementById("table");

function addRow() {
  const tableBody = document.getElementById("table-body");
  let nameOfStudent = document.createElement("td");
  let notesFirstSemester = document.createElement("td");
  let notesSecondSemester = document.createElement("td");
  let frequency = document.createElement("td");
  
  const row = document.createElement("tr");

  const studentNameValue = document.getElementById("studentName").value;
  const firstSemesterValue = document.getElementById("firstSemesterNotes").value;
  const secondSemesterValue = document.getElementById("secondSemesterNotes").value;
  const frequencyValue = document.getElementById("frequency").value

  
  nameOfStudent.innerHTML = studentNameValue 
  notesFirstSemester.innerHTML = firstSemesterValue
  notesSecondSemester.innerHTML = secondSemesterValue
  frequency.innerHTML = frequencyValue
  
  row.appendChild(nameOfStudent);
  row.appendChild(notesFirstSemester);
  row.appendChild(notesSecondSemester);
  row.appendChild(frequency);
  
  if (allAnswers < 5) {
    const setReprove = () => (document.getElementByTagName("tr").style.color = "red");
      return setReprove()
  } 
  tableBody.appendChild(row);
  
}


const answers = document.querySelectorAll("td");

const allAnswers = answers.forEach(element => {
  console.log(element)
});


const showTable = () => (table.style.display = "block");
sendForms.addEventListener("click", () => {
  showTable();
});

const keepGoingMessage = () => confirm("Você deseja enviar?")

function buttonAddFunctions() {
  addRow();
  showTable();
  keepGoingMessage()
}


