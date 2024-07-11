const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public/'))

const supabaseUrl = 'https://tchabdxeyblwtuuenvoq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaGFiZHhleWJsd3R1dWVudm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MDQzMDUsImV4cCI6MjAzMDA4MDMwNX0.u_NbXEqNxQtsopda8sF-2vwjLkl9K3kJeS4dyDu1A_M'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/home.html', { root: __dirname })
})

app.get('/data', async (req, res) => {
    console.log('Attempting to GET data')
    const { data, error } = await supabase
        .from('INST490_Demo')
        .select()

    if (error) {
        console.log("Error")
        res.send(error)
    } else {
        res.send(data)
    }

    console.log('Data:', data)
    console.log('Error:', error)
})

app.post('/data', async (req, res) => {
    console.log('Adding Info')

    console.log(req.body)

    var e_d = req.body.e_d;
    var houseNum = req.body.houseNum;
    var buildingNum = req.body.buildingNum;
    var streetName = req.body.streetName;
    var lastName = req.body.lastName;
    var firstName = req.body.firstName;
    var relat = req.body.relat;
    var headLast = req.body.headLast;
    var headFirst = req.body.headFirst;
    var se_x = req.body.se_x;
    var rac_e = req.body.rac_e;
    var marit = req.body.marit;
    var ag_e = req.body.ag_e;
    var placeBirth = req.body.place_Birth;
    var birthYear = req.body.birthYear;
    var wor_k = req.body.wor_k;
    var busi = req.body.busi;
    var sheetNum = req.body.sheetNum;
    var mis_c = req.body.mis_c;
    var remark = req.body.remark;

    
    const { data, error } = await supabase
        .from('INST490_Demo')
        .insert([{
            ed: e_d,
            house_num: houseNum,
            building_num: buildingNum,
            street_name: streetName,
            last_name: lastName,
            first_name: firstName,
            relation: relat,
            head_last: headLast,
            head_first: headFirst,
            sex: se_x,
            race: rac_e,
            marital: marit,
            age: ag_e,
            place_birth: placeBirth,
            birth_year: birthYear,
            work: wor_k,
            business: busi,
            sheet_num: sheetNum,
            misc: mis_c,
            remarks: remark
        }])
        .select()

    if (error) {
        console.log("Error")
        res.send(error)
    } else {
        res.send(data)
    }
})

const fetchData = async (filters) => {
    let query = supabase.from('INST490_Demo').select('*')
  
    // Dynamically add filters to the query
    Object.keys(filters).forEach(field => {
      if (filters[field]) {
        query = query.eq(field, filters[field])
      }
    })
  
    // Execute the query
    const { data, error } = await query
  
    if (error) {
      console.error('Error fetching data:', error)
      return null
    }
  
    return data
  }

app.post('/query', async (req, res) => {
    const filters = req.body
  
    try {
      const data = await fetchData(filters)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })

/* app.post('/filter', async (req, res) => {
    console.log('Attempting to GET filtered data')
    test = {
        "name": "John", 
        "age": 30, 
        "city": "New York"
    }
    test1 = JSON.stringify(test)
    console.log(test1)

    const { data, error } = await supabase
        .from('INST490_Demo')
        .select()
        .match({filters})
        

    if (error) {
        console.log("Error")
        res.send(error)
    } else {
        res.send(data)
    }

    console.log('Data:', data)
    console.log('Error:', error)

})
 */
app.listen(port, () => {
    console.log('App is alive!')
})