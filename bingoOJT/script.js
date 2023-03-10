function selectedRow() {
  var cells = document.getElementsByTagName("td");

  // Loop through each cell
  for (var i = 0; i < cells.length; i++) {
    // Add a click event listener to the cell
    cells[i].addEventListener("click", function () {
      // Change the background color of the cell to red

      if (this.style.backgroundColor === "skyblue") {
        this.style.backgroundColor = "";
      } else {
        this.style.backgroundColor = "skyblue";
      }
    });
  }
}
selectedRow();

// Get reference to table and cells
const table = document.querySelector("#bingotable2");
const cells = table.querySelectorAll("td");
var insert = document.getElementById("showRecentId");
var lastCalled = document.getElementById("showCounter");
// Create empty array to store ids
const idArray = [];
let counter = 0;
// Add event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const cellId = cell.getAttribute("id");
    idArray.push(cellId);
    console.log(idArray + "id");
    insert.innerHTML = idArray[idArray.length - 1];
    counter++;
    lastCalled.innerHTML = counter;
  });
});

var lastElement = idArray[idArray.length - 1];
cell.innerHTML = lastElement;
console.log(lastElement);
document.getElementById("reset-button").addEventListener("click", function () {
  location.reload();
});
