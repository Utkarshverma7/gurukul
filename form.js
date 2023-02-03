const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const column1 = document.getElementById("column1").value;
  const column2 = document.getElementById("column2").value;
  console.log(`Column 1: ${column1}`);
  console.log(`Column 2: ${column2}`);
  // Add code to send data to server
});
