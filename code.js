let rows = 0; /*объявили переменную строк - их сначала 0*/
const tbl = document.createElement('table');
/*создаем таблицу0*/

function toallow(){
    let addbutton = document.getElementById('add');
    let delbutton = document.getElementById('delete');
    let inputfield = document.getElementById('number');
    addbutton.disabled = !addbutton.disabled;
    delbutton.disabled = !delbutton.disabled;
    inputfield.disabled = !inputfield.disabled;
}
/*другие элементы*/

function addrow(){
    let row = tbl.insertRow();
    row.insertCell().append(rows);
    row.insertCell().append("Столбец 1");
    row.insertCell().append("Столбец 2");
    row.insertCell().append("Столбец 3");
    rows = rows + 1;
}

function make(){
    if (document.getElementById('table')){
        alert("Таблица уже была создана");
    }
    else{
        tbl.innerHTML = "<table>";
        tbl.setAttribute('id', 'table');
        document.body.append(tbl);
        rows += 1;
        addrow();
    }
}

function deleterow(){
    if (document.getElementById('number').value === "") {
        alert("Введите номер строки для удаления")
    }
    row_number = document.getElementById('number').value;
    try {
        tbl.deleteRow(row_number - 1);
    }
    catch (e) {
        alert("Номер строки введен неверно");
    }
}