// home page JS functions

var host = window.location.origin;

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
    table = document.getElementById("run-query-table")
    table.innerHTML = '';
    document.getElementById("query-container").reset();
}

function filterData() {

    var first_name = document.getElementById("firstName");
    var last_name = document.getElementById("lastName");
    var head_house = document.getElementById("headOfHouse");
    var age_1 = document.getElementById("age");
    var house_number = document.getElementById("houseNumber");
    var building_number = document.getElementById("buildingNumber");
    var street_names = document.getElementById("streetName");

    var values = {};

    if (first_name.value != '') {
        values['first_name'] = first_name.value
    }

    if (last_name.value != '') {
        values['last_name'] = last_name.value

    }

    if (head_house.value != '') {
        values['head_last'] = head_house.value

    }

    if (age_1.value != '') {
        values['age'] = age_1.value

    }

    if (house_number.value != '') {
        values['house_num'] = house_number.value

    }

    if (building_number.value != '') {
        values['building_num'] = building_number.value

    }

    if (street_names.value != '') {
        values['street_name'] = street_names.value

    }

    fetch(`${host}/query`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Filtered Data:', data);
            var htmlTable = document.getElementById("run-query-table")

            displayData(data, htmlTable);

        })
        .catch(error => {
            console.error('Error:', error);
        });

    toggleQuery();
}