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
    document.getElementById('filtered-display').className = "d-none";
  } else {
    queryContainer.style.display = "none";
  }

  // clear the table when the form is submitted

  document.getElementById("run-query-1950").innerHTML = "";
  document.getElementById("run-query-1900").innerHTML = "";
  document.getElementById("run-query-1920").innerHTML = "";
  document.getElementById("run-query-1930").innerHTML = "";
  document.getElementById("run-query-1940").innerHTML = "";
  document.getElementById("run-query-1965").innerHTML = "";
  document.getElementById('head1900').innerHTML = "1900 Census: "
  document.getElementById('head1920').innerHTML = "1920 Census: "
  document.getElementById('head1930').innerHTML = "1930 Census: "
  document.getElementById('head1940').innerHTML = "1940 Census: "
  document.getElementById('head1950').innerHTML = "1950 Census: "
  document.getElementById('head1965').innerHTML = "1965 Voter Registration: "
  document.getElementById("form-container").reset();
}

function capitalizeWord(word) {
  const finalSentence = word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  return finalSentence;
}

// This function runs a query on the supabase data and returns the filtered data in a table
function filterData() {
  console.log("form submitted");
  var first_name = document.getElementById("firstName");
  var last_name = document.getElementById("lastName");
  var head_house = document.getElementById("headOfHouse");
  var house_number = document.getElementById("houseNumber");
  var street_names = document.getElementById("streetName");
  var build_num = document.getElementById("buildNum");
  var age = document.getElementById("age");


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

  if (age.value != "") {
    values["street_name"] = age.value
  }

  if (build_num.value != "") {
    values["street_name"] = build_num.value
  }

  document.getElementById('filtered-display').className = "d-block";

  // 1900 filtered table
  fetch(`${host}/query1900`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length != 0) {
        var htmlTable = document.getElementById("run-query-1900");
        displayData(data, htmlTable, '1900');
        document.getElementById("run-query-1900").deleteTFoot();
        new DataTable('#run-query-1900', {
          destroy: true,
          pageLength: 5,
          searching: false,
          layout: {
            topStart: null
          }
        });
      } else {
        document.getElementById('head1900').innerHTML += "No Data Found"
      }

    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // 1920 filtered table
  fetch(`${host}/query1920`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length != 0) {
        var htmlTable = document.getElementById("run-query-1920");
        displayData(data, htmlTable, '1920');
        document.getElementById("run-query-1920").deleteTFoot();
        new DataTable('#run-query-1920', {
          destroy: true,
          pageLength: 5,
          searching: false,
          layout: {
            topStart: null
          }
        });
      } else {
        document.getElementById('head1920').innerHTML += "No Data Found"
      }

    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // 1930 filtered table
  fetch(`${host}/query1930`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length != 0) {
        var htmlTable = document.getElementById("run-query-1930");
        displayData(data, htmlTable, '1930');
        document.getElementById("run-query-1930").deleteTFoot();
        new DataTable('#run-query-1930', {
          destroy: true,
          pageLength: 5,
          searching: false,
          layout: {
            topStart: null
          }
        });
      } else {
        document.getElementById('head1930').innerHTML += "No Data Found"
      }

    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // 1940 filtered table
  fetch(`${host}/query1940`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length != 0) {
        var htmlTable = document.getElementById("run-query-1940");
        displayData(data, htmlTable, '1940');
        document.getElementById("run-query-1940").deleteTFoot();
        new DataTable('#run-query-1940', {
          destroy: true,
          pageLength: 5,
          searching: false,
          layout: {
            topStart: null
          }
        });
      } else {
        document.getElementById('head1940').innerHTML += "No Data Found"
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  //1950 filtered table
  fetch(`${host}/query1950`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length != 0) {
        var htmlTable = document.getElementById("run-query-1950");
        displayData(data, htmlTable, '1950');
        document.getElementById("run-query-1950").deleteTFoot();
        new DataTable('#run-query-1950', {
          destroy: true,
          pageLength: 5,
          searching: false,
          layout: {
            topStart: null
          }
        });
      } else {
        document.getElementById('head1950').innerHTML += "No Data Found"
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // 1965 filtered table
  fetch(`${host}/query1965`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length != 0) {
        var htmlTable = document.getElementById("run-query-1965");
        displayData(data, htmlTable, '1965');
        document.getElementById("run-query-1965").deleteTFoot();
        new DataTable('#run-query-1965', {
          destroy: true,
          pageLength: 5,
          searching: false,
          layout: {
            topStart: null
          }
        });
      } else {
        document.getElementById('head1965').innerHTML += "No Data Found"
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  // clear the table and form when submitted
  toggleQuery();
}
