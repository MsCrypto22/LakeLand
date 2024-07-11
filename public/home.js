// Contains the JS code for the home page

function toggleQuery() {
  var queryContainer = document.getElementById("query-container");

  var displayStyle = window
    .getComputedStyle(queryContainer)
    .getPropertyValue("display");

  if (displayStyle === "none") {
    queryContainer.style.display = "block";
  } else {
    queryContainer.style.display = "none";
  }
}
