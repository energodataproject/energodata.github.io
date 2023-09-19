
// --------------------------Upload File Function-----------------------------//

const uploadExcelFile= () => {
    const fileInput = document.getElementById('excelFile');
    const file = fileInput.files[0];

    if (file) {
        console.log('Selected file:', file.name);
    } else {
        alert('Please select an Excel file.');
    }
}


  