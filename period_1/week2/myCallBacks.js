const numbers = [1, 4, 5, 6, 7, 9];
const tableRows = numbers.map(n => "<tr>"+n+"</tr>");
console.log(tableRows.join(" "));