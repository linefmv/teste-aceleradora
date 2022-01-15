
function addRow() {
  const tableBody = document.getElementById("table-body");
  let nameOfStudent = document.createElement("td");
  let notesFirstSemester = document.createElement("td");
  let notesSecondSemester = document.createElement("td");
  let frequency = document.createElement("td");
  
  const row = document.createElement("tr");

  const studentNameValue =  document.getElementById("studentName").value;
  const firstSemesterValue = parseFloat(document.getElementById("firstSemesterNotes").value);
  const secondSemesterValue = parseFloat(document.getElementById("secondSemesterNotes").value);
  const frequencyValue = document.getElementById("frequency").value;

  nameOfStudent.innerHTML = studentNameValue
  notesFirstSemester.innerHTML = firstSemesterValue.toFixed(2);
  notesSecondSemester.innerHTML = secondSemesterValue.toFixed(2)
  frequency.innerHTML = frequencyValue + '%'

  row.appendChild(nameOfStudent);
  row.appendChild(notesFirstSemester);
  row.appendChild(notesSecondSemester);
  row.appendChild(frequency);
  
  tableBody.appendChild(row);
  
}

const sendForms = document.getElementById("add");
const table = document.getElementById("table");

const showTable = () => (table.style.display = "block");
sendForms.addEventListener("click", () => {
  showTable();
});

const confirmSendForm = () => confirm("Você deseja enviar?")

function buttonAddFunctions() {
  addRow();
  showTable();
  confirmSendForm()
}


