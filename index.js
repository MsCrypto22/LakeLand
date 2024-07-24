const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public/'))

const supabaseUrl = 'https://xapgvvhvihlinmxqetqz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcGd2dmh2aWhsaW5teHFldHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMzA4OTYsImV4cCI6MjAzNjkwNjg5Nn0.Yl2Z1kElE1q5Jlrxkk2IDfwKiyY6otUx9hivV1XtlY0'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/home.html', { root: __dirname })
})

app.get('/1950', async (req, res) => {
    console.log('Attempting to GET data')
    const { data, error } = await supabase
        .from('1950_census')
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

app.post('/1950', async (req, res) => {
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
    var wor_k = req.body.wor_k;
    var busi = req.body.busi;

    
    const { data, error } = await supabase
        .from('1950_census')
        .insert([{
            ed: e_d,
            house_num: houseNum,
            build_num: buildingNum,
            street_name: streetName,
            last_name: lastName,
            first_name: firstName,
            relation_head: relat,
            head_last: headLast,
            head_first: headFirst,
            sex: se_x,
            race: rac_e,
            marital: marit,
            age: ag_e,
            place_birth: placeBirth,
            work: wor_k,
            business: busi
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
    let query = supabase.from('1950_census').select('*')
  
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

app.listen(port, () => {
    console.log('App is alive!')
})