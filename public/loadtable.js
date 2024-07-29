function headerVals(id) {
    header_vals = [];

    if (id == "1900") {
        header_vals = [
            "ED",
            "Dwelling",
            "Family",
            "House #",
            "Street #",
            "Last Name",
            "First Name",
            "HoH Last Name",
            "HoH First Name",
            "Relation to HoH",
            "Race",
            "Sex",
            "Age",
            "Marital Status",
            "Place of Birth",
            "Work",
        ];

    } else if (id == "1940") {
        header_vals = [
            "ED",
            "House #",
            "Street #",
            "First Name",
            "Last Name",
            "Relation to HoH",
            "HoH Last Name",
            "HoH First Name",
            "Sex",
            "Marital Status",
            "Age",
            "Place of Birth",
        ];

    } else if (id == "1950") {
        header_vals = [
            "ED",
            "House #",
            "Building #",
            "Street #",
            "First Name",
            "Last Name",
            "Relation to HoH",
            "HoH Last Name",
            "HoH First Name",
            "Sex",
            "Race",
            "Marital Status",
            "Age",
            "Place of Birth",
            "Work",
            "Business",
        ];

    } else if (id == "1965") {
        header_vals = ["House #", "Street #", "Last Name", "First Name"];
    }

    return header_vals
}

//Load Supabase data into HTML table - specific to 1950s dataset
function displayData(data, htmlTable, id) {
    //Create table headers
    header_vals = headerVals(id);

    thead = document.createElement("thead");
    tr = document.createElement("tr");

    for (let i = 0; i < header_vals.length; i++) {
        new_header = document.createElement("th");
        new_header.innerHTML = header_vals[i];
        tr.appendChild(new_header);
    }

    thead.appendChild(tr);
    htmlTable.appendChild(thead);

    var tfoot = document.createElement("tfoot");
    tfoot.style.display = "table-header-group";
    tr = document.createElement("tr");

    for (let i = 0; i < header_vals.length; i++) {
        new_header = document.createElement("th");
        new_header.innerHTML = header_vals[i];
        tr.appendChild(new_header);
    }

    tfoot.appendChild(tr);
    htmlTable.appendChild(tfoot);

    tbody = document.createElement("tbody");

    //Populate table with data from Supabase
    data.forEach((row) => {

        tr = document.createElement("tr");
        let index = 0; // Initialize an index counter

        for (const [key, value] of Object.entries(row)) {
            if (index === 0) {  // Skip the first item
                index++;
                continue;
            }

            curr = document.createElement("td");
            curr.innerHTML = value;
            tr.appendChild(curr);
            index++;
        }
        
        tbody.appendChild(tr);
        htmlTable.appendChild(tbody);
    });
}