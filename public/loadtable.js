//Load Supabase data into HTML table - specific to 1950s dataset
function displayData(data, htmlTable) {

    //Create table headers
    thead = document.createElement("thead")
    tr = document.createElement("tr");

    header_vals = [
        'ED', 'House #', 'Building #', "Street #", "First Name", "Last Name", "Relation to HoH",
        "HoH Last Name", "HoH First Name", "Sex", "Race", "Marital Status", "Age", "Place of Birth",
        "Work", "Business"
    ]

    for (let i = 0; i < header_vals.length; i++) {
        new_header = document.createElement("th");
        new_header.innerHTML = header_vals[i];
        tr.appendChild(new_header);
    }

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
        tr.appendChild(work);
        tr.appendChild(business);

        tbody.appendChild(tr);
        htmlTable.appendChild(tbody);
    })


    tfoot = document.createElement("tfoot");
    tr = document.createElement("tr");
    
    for (let i = 0; i < header_vals.length; i++) {
        new_header = document.createElement("th");
        new_header.innerHTML = header_vals[i];
        tr.appendChild(new_header);
    }
}