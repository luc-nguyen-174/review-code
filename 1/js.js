//noinspection HtmlDeprecatedAttribute

let table1;
table1="<table border='1' cellpadding='6'>"  //khoi tao the table
for (let i = 1; i <10;i++) {
    table1 = table1 + "<tr>";      //khoi tao the <tr>
    for (let j = 2; j < 10; j++) {
        table1=table1 + "<td>" + j + "*" + i + "=" + i * j + "</td>"; //khoi tao the <td>
    }
    table1 = table1 + "</tr>";  //dong the <tr>
}
table1 = table1 + "</table>";  //dong the table
document.getElementById("bangCuuChuong0").innerHTML= table1;  //in ra man hinh



//convert to while loop.

let table2;
table2="<table border='1' cellpadding='6'>"  //khoi tao table
let a=1;
while (a<10){
    table2 = table2 + "<tr>";  //khoi tao the <tr>
    let b=2;
    while (b < 10) {
        table2=table2 + "<td>" + b + "*" + a + "=" + a * b + "</td>";  //khoi tao the <td>
        b++;
    }
    table2 = table2 + "</tr>";  //dong the <tr>
    a++;
}
table2 = table2 + "</table>";  //dong the table
document.getElementById("bangCuuChuong1").innerHTML= table2;  //in ra man hinh