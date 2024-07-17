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
            htmlTable = document.getElementById("run-query-table")

            thead = document.createElement("thead")
            tr = document.createElement("tr");
            ed = document.createElement("th");
            house_num = document.createElement("th");
            building_num = document.createElement("th");
            street_name = document.createElement("th");
            firstName = document.createElement("th");
            lastName = document.createElement("th");
            relation = document.createElement("th");
            head_last = document.createElement("th");
            head_first = document.createElement("th");
            sex = document.createElement("th");
            race = document.createElement("th");
            marital = document.createElement("th");
            age = document.createElement("th");
            place_birth = document.createElement("th");
            birth_year = document.createElement("th");
            work = document.createElement("th");
            business = document.createElement("th");

            //Assign values to table headers
            ed.innerHTML = "ED";
            house_num.innerHTML = "House #"
            building_num.innerHTML = "Building #"
            street_name.innerHTML = "Street #"
            firstName.innerHTML = "First Name";
            lastName.innerHTML = "Last Name";
            relation.innerHTML = "Relation to HoH"
            head_last.innerHTML = "HoH Last Name"
            head_first.innerHTML = "HoH First Name"
            sex.innerHTML = "Sex"
            race.innerHTML = "Race"
            marital.innerHTML = "Marital Status"
            age.innerHTML = "Age"
            place_birth.innerHTML = "Place of Birth"
            birth_year.innerHTML = "Birth Year"
            work.innerHTML = "Work"
            business.innerHTML = "Business"

            //Append headers to table
            tr.appendChild(ed);
            tr.appendChild(house_num);
            tr.appendChild(building_num);
            tr.appendChild(street_name);
            tr.appendChild(firstName);
            tr.appendChild(lastName);
            tr.appendChild(relation);
            tr.appendChild(head_last);
            tr.appendChild(head_first);
            tr.appendChild(sex);
            tr.appendChild(race);
            tr.appendChild(marital);
            tr.appendChild(age);
            tr.appendChild(place_birth);
            tr.appendChild(birth_year);
            tr.appendChild(work);
            tr.appendChild(business);

            thead.appendChild(tr)
            htmlTable.appendChild(thead);

            tbody = document.createElement("tbody")

            //Populate table with data from Supabase
            data.forEach((row) => {
                tr = document.createElement("tr");
                ed = document.createElement("td");
                house_num = document.createElement("td");
                building_num = document.createElement("td");
                street_name = document.createElement("td");
                firstName = document.createElement("td");
                lastName = document.createElement("td");
                relation = document.createElement("td");
                head_last = document.createElement("td");
                head_first = document.createElement("td");
                sex = document.createElement("td");
                race = document.createElement("td");
                marital = document.createElement("td");
                age = document.createElement("td");
                place_birth = document.createElement("td");
                birth_year = document.createElement("td");
                work = document.createElement("td");
                business = document.createElement("td");

                ed.innerHTML = row.ed;
                house_num.innerHTML = row.house_num;
                building_num.innerHTML = row.building_num;
                street_name.innerHTML = row.street_name;
                firstName.innerHTML = row.first_name;
                lastName.innerHTML = row.last_name;
                relation.innerHTML = row.relation;
                head_last.innerHTML = row.head_last;
                head_first.innerHTML = row.head_first;
                sex.innerHTML = row.sex;
                race.innerHTML = row.race;
                marital.innerHTML = row.marital;
                age.innerHTML = row.age;
                place_birth.innerHTML = row.place_birth;
                birth_year.innerHTML = row.birth_year;
                work.innerHTML = row.work;
                business.innerHTML = row.business;

                tr.appendChild(ed);
                tr.appendChild(house_num);
                tr.appendChild(building_num);
                tr.appendChild(street_name);
                tr.appendChild(firstName);
                tr.appendChild(lastName);
                tr.appendChild(relation);
                tr.appendChild(head_last);
                tr.appendChild(head_first);
                tr.appendChild(sex);
                tr.appendChild(race);
                tr.appendChild(marital);
                tr.appendChild(age);
                tr.appendChild(place_birth);
                tr.appendChild(birth_year);
                tr.appendChild(work);
                tr.appendChild(business);

                tbody.appendChild(tr);
                htmlTable.appendChild(tbody);
            })

        })
        .catch(error => {
            console.error('Error:', error);
        });

    toggleQuery();
}