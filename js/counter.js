let total = 0;

countDragonBalls = (number) => {
    let table = document.getElementById('counter-table');
    let newTotal = total += addOrSub(number);
    updateTotal(newTotal);

    document.getElementById('counterTotal').innerHTML = total;

    let row = table.insertRow(1);
    let dataNum = document.createElement('td');
    let dataOp = document.createElement('td');
    let dataTotal = document.createElement('td');

    dataOp.innerHTML = document.querySelector('.operator-selected').id;
    dataNum.innerHTML = number;
    dataTotal.innerHTML = total;

    row.append(dataOp);
    row.append(dataNum);
    row.append(dataTotal);
}

toggleOperator = () => {
    document.getElementById('add').classList.toggle('operator-selected');
    document.getElementById('sub').classList.toggle('operator-selected');
}

addOrSub = (number) => {
    let currentOperator = document.querySelector('.operator-selected').id

    if(currentOperator == 'add'){
        return number;
    }else{
        return -number
    }
}

resetHistory = () => {  
let table = document.getElementById('counter-table')
let rowCount = table.rows.length;
for (let i = 1; i < rowCount; i++) {
    table.deleteRow(1);
}
updateTotal(0)
}

updateTotal = (num) => {
    total = num;
    document.getElementById('counterTotal').innerHTML = total;
}