const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ===================================Excel file=====================================//
// Function to create and trigger the file input element
function createFileInput() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.xls, .xlsx';
  fileInput.addEventListener('change', handleFileSelection);

  fileInput.click();
}

// Function to handle file selection
function handleFileSelection(event) {
  var file = event.target.files[0];
  if (file) {
    readAndDisplayExcel(file);
  } else {
    alert('Please select an Excel file.');
  }
}

// Function to read and display the Excel file
function readAndDisplayExcel(file) {
  const excelContent = document.getElementById('excelContent');
  const excelContent2 = document.getElementById('excelContent2')
  const reader = new FileReader();

  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    // Assuming the first sheet is to be displayed
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet to an HTML table
    const htmlTable = XLSX.utils.sheet_to_html(sheet);

    // Display the HTML table in the "excelContent" div
    excelContent.innerHTML = htmlTable;
    excelContent2.innerHTML = htmlTable;
  };

  reader.readAsArrayBuffer(file);
}

// JavaScript function to handle file selection and display
function chooseExcelFile() {
  createFileInput();
}
