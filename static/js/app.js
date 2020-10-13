// from data.js
var UFOtable = data;
console.log(UFOtable);
  tbody.html("");
// Get a reference to the table body
function buildtable(data){
var tbody = d3.select("tbody");

// UFO Sighting values for each column 
data.forEach((rowdata)=>{

    var row = tbody.append("tr");
    Object.values(rowdata).forEach((value) => {

        var cell = row.append("td");
        cell.text(value);
    });

});

}
buildtable(UFOtable)

function filterclick(){
    var inputdate = d3.select("#datetime");
        var inputValue = inputdate.property("value");
        console.log(inputValue);

    var filteredData= UFOtable;
    filteredData=filteredData.filter(row=>row.datatime===inputValue);
    buildtable (filteredData);

}
d3.selectAll("#filter - btn").on("click",filterclick);
