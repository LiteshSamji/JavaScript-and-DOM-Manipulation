// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function buildTable(data) {
// iterate through the data
    data.forEach((dataRow) => {
        //Apend a row to the table body
        const row = tbody.append("tr");
        //Loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell= row.append("td")
            cell.text(val);
            //let row.append("td").text(val);
            }
        ); 
    });
}

buildTable(tableData);