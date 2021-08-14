// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");

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
            }
        ); 
    });
}
//Load data
buildTable(tableData);

button.on("click", () => {
    //Prevent the page from refreshing
    d3.event.preventDefault();
    //Select the Input element
    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    
    tbody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        buildTable(filterDate);
    }
    // add comment if not sightings    
        else {
            tbody.append("tr").append("td").text("No Data Found ...");
        }
})

