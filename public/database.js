var host = window.location.origin;

function loadSupabase() {
    return fetch(`${host}/data`)
    .then((res) => res.json())
}

async function displayData() {
    const supabase = await loadSupabase();
    console.log(supabase);
    const htmlTable = document.getElementById("dataTable");

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

    ed.innerHTML = "ED";
    house_num.innerHTML = "House Number"
    building_num.innerHTML = "Building Number"
    street_name.innerHTML = "Street Number"
    firstName.innerHTML = "First Name";
    lastName.innerHTML = "Last Name";
    relation.innerHTML = "Relation to Head of House"
    head_last.innerHTML = "Head of House Last Name"
    head_first.innerHTML = "Head of House FIrst Name"
    sex.innerHTML = "Sex"
    race.innerHTML = "Race"
    marital.innerHTML = "Marital Status"
    age.innerHTML = "Age at Time of Census"
    place_birth.innerHTML = "Age at Time of Census"
    birth_year.innerHTML = "Birth Year"
    work.innerHTML = "Kind of Work"
    business.innerHTML = "Kind of Business"

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

    htmlTable.appendChild(tr);

    supabase.forEach((row) => {
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
    
        htmlTable.appendChild(tr);
      })


}

window.onload = displayData();