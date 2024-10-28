function addStudent() {
    
    var mssv = document.getElementById ("mssv").value;
    var name = document.getElementById("name").value;
    var className = document.getElementById("class").value;

  
    if (mssv === "" || name === "" || className === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    
    var table = document.getElementById("studentTable");
    var row = table.insertRow(-1); 

  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    
    cell1.innerHTML = mssv;
    cell2.innerHTML = name;
    cell3.innerHTML = className;

    
    document.getElementById("studentForm").reset();
}
