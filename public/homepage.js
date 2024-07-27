// home page JS functions

var host = window.location.origin;

// show or hide the form when clicked
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

  // clear the table when the form is submitted
  table = document.getElementById("run-query-table");
  table.innerHTML = "";
  document.getElementById("form-container").reset();
}

function capitalizeWord(word) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalized;
}

// This function runs a query on the supabase data and returns the filtered data in a table
function filterData() {
  console.log("form submitted");
  var first_name = document.getElementById("firstName");
  var last_name = document.getElementById("lastName");
  var head_house = document.getElementById("headOfHouse");
  var house_number = document.getElementById("houseNumber");
  var street_names = document.getElementById("streetName");

  var values = {};

  if (first_name.value != "") {
    word = first_name.value;
    values["first_name"] = capitalizeWord(word);
  }

  if (last_name.value != "") {
    word = last_name.value;
    values["last_name"] = capitalizeWord(word);
  }

  if (head_house.value != "") {
    word = head_house.value;
    values["head_last"] = capitalizeWord(word);
  }

  if (house_number.value != "") {
    values["house_num"] = house_number.value;
  }

  if (street_names.value != "") {
    word = street_names.value;
    values["street_name"] = capitalizeWord(word);
  }

  fetch(`${host}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Filtered Data:", data);
      var htmlTable = document.getElementById("run-query-table");

      displayData1950(data, htmlTable);

      document.getElementById("run-query-table").deleteTFoot();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // clear the table and form when submitted
  toggleQuery();
}
