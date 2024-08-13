var host = window.location.origin;
var path = window.location.pathname;

if (path === "/1950s.html") {
  //Fetch data from Supabase database
  function loadSupabase() {
    return fetch(`${host}/1950`).then((res) => res.json());
  }
} else if (path === "/1940s.html") {
  //Fetch data from Supabase database
  function loadSupabase() {
    return fetch(`${host}/1940`).then((res) => res.json());
  }
} else if (path === "/1900s.html") {
  //Fetch data from Supabase database
  function loadSupabase() {
    return fetch(`${host}/1900`).then((res) => res.json());
  }
} else if (path === "/1965.html") {
  //Fetch data from Supabase database
  function loadSupabase() {
    return fetch(`${host}/1965`).then((res) => res.json());
  }
} else if (path === "/1920s.html") {
  //Fetch data from Supabase database
  function loadSupabase() {
    return fetch(`${host}/1920`).then((res) => res.json());
  }
} else if (path === "/1930s.html") {
  //Fetch data from Supabase database
  function loadSupabase() {
    return fetch(`${host}/1930`).then((res) => res.json());
  }
}

// Generate the full data table with supabase data
async function runTable() {
  const data = await loadSupabase();
  const htmlTable = document.getElementById("example");

  if (path === "/1950s.html") {
    displayData(data, htmlTable, "1950");
  } else if (path === "/1940s.html") {
    displayData(data, htmlTable, "1940");
  } else if (path === "/1900s.html") {
    displayData(data, htmlTable, "1900");
  } else if (path === "/1965.html") {
    displayData(data, htmlTable, "1965");
  } else if (path === "/1920s.html") {
    displayData(data, htmlTable, "1920");
  } else if (path === "/1930s.html") {
    displayData(data, htmlTable, "1930");
  }

  //Initialize Datatables plugin- see Datatables documentation for more info
  new DataTable("#example", {
    //add column visibility
    layout: {
      topStart: {
        buttons: ["colvis"],
      },
    },

    //add multi column search
    initComplete: function () {
      this.api()
        .columns()
        .every(function () {
          let column = this;
          let title = column.footer().textContent;

          // Create input element
          let input = document.createElement("input");
          input.placeholder = title;
          column.footer().replaceChildren(input);

          // Event listener for user input
          input.addEventListener("keyup", () => {
            if (column.search() !== this.value) {
              column.search(input.value).draw();
            }
          });
        });
    },
  });
}

window.onload = runTable();
