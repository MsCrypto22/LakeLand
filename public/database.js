var host = window.location.origin;

//Fetch data from Supabase database
function loadSupabase() {
    return fetch(`${host}/data`)
        .then((res) => res.json())
}

async function runTable() {
    const data = await loadSupabase();
    const htmlTable = document.getElementById("example");

    displayData(data, htmlTable);

    tfoot.appendChild(tr)
    htmlTable.appendChild(tfoot);

    //Initialize Datatables plugin- see Datatables documentation for more info
    new DataTable('#example', {
        //add column visibility
        layout: {
            topStart: {
                buttons: ['colvis']
            }
        },

        //add multi column search 
        initComplete: function () {
            this.api()
                .columns()
                .every(function () {
                    let column = this;
                    let title = column.footer().textContent;

                    // Create input element
                    let input = document.createElement('input');
                    input.placeholder = title;
                    column.footer().replaceChildren(input);

                    // Event listener for user input
                    input.addEventListener('keyup', () => {
                        if (column.search() !== this.value) {
                            column.search(input.value).draw();
                        }
                    });
                });
        }
    });
}




window.onload = runTable();