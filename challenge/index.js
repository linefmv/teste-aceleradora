function addRow() {
    const tableBody = document.getElementById("table-body");
    let nameOfStudent = document.createElement("th");
    let notesFirstSemester = document.createElement("th");
    let notesSecondSemester = document.createElement("th");  
    let frequency = document.createElement("th");    
    
    const row = document.createElement("tr");
    
    nameOfStudent.innerHTML = document.getElementById("studentName").value;
    notesFirstSemester.innerHTML  = document.getElementById("firstSemesterNotes").value;
    notesSecondSemester.innerHTML  = document.getElementById("secondSemesterNotes").value;
    frequency.innerHTML  = document.getElementById("frequency").value;
    
row.appendChild(nameOfStudent);
row.appendChild(notesFirstSemester);
row.appendChild(notesSecondSemester);
row.appendChild(frequency);


tableBody.appendChild(row);

}

const sendInput = document.getElementById('add')
const table = document.getElementById('table')
const showTable = () => table.style.display = "block";
sendInput.addEventListener('click', () => {
    showTable()
})

