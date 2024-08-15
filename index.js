const supabaseClient = require("@supabase/supabase-js");
const bodyParser = require("body-parser");
const express = require("express");

require("dotenv").config();

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/"));

const supabaseUrl = "https://rjyjsnetkrqvksvphnhz.supabase.co";
const supabase = supabaseClient.createClient(
  supabaseUrl,
  process.env.SUPABASE_KEY,
);

// Get endpoints
app.get("/", (req, res) => {
  res.sendFile("public/home.html", { root: __dirname });
});

app.get("/1950", async (req, res) => {
  console.log("Attempting to GET data");
  const { data, error } = await supabase.from("1950_census").select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }

  console.log("Error:", error);
});

app.get("/1940", async (req, res) => {
  console.log("Attempting to GET data");

  const { data, error } = await supabase.from("1940_census").select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }

  console.log("Error:", error);
});

app.get("/1900", async (req, res) => {
  console.log("Attempting to GET data");

  const { data, error } = await supabase.from("1900_census").select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }

  console.log("Error:", error);
});

app.get("/1965", async (req, res) => {
  console.log("Attempting to GET data");
  const { data, error } = await supabase.from("1965_voters").select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }

  console.log("Error:", error);
});

app.get("/1920", async (req, res) => {
  console.log("Attempting to GET data");
  const { data, error } = await supabase.from("1920_census").select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }

  console.log("Error:", error);
});

app.get("/1930", async (req, res) => {
  console.log("Attempting to GET data");
  const { data, error } = await supabase.from("1930_census").select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }

  console.log("Error:", error);
});

//Post endpoints
app.post("/1950", async (req, res) => {
  console.log("Adding Info");

  console.log(req.body);

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
    .from("1950_census")
    .insert([
      {
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
        business: busi,
      },
    ])
    .select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }
});

app.post("/1940", async (req, res) => {
  console.log("Adding Info");

  console.log(req.body);

  var e_d = req.body.e_d;
  var houseNum = req.body.houseNum;
  var streetName = req.body.streetName;
  var lastName = req.body.lastName;
  var firstName = req.body.firstName;
  var relat = req.body.relat;
  var headLast = req.body.headLast;
  var headFirst = req.body.headFirst;
  var se_x = req.body.se_x;
  var marit = req.body.marit;
  var ag_e = req.body.ag_e;
  var placeBirth = req.body.place_Birth;

  const { data, error } = await supabase
    .from("1940_census")
    .insert([
      {
        ed: e_d,
        house_num: houseNum,
        street_name: streetName,
        last_name: lastName,
        first_name: firstName,
        relation_head: relat,
        head_last: headLast,
        head_first: headFirst,
        sex: se_x,
        marital: marit,
        age: ag_e,
        place_birth: placeBirth,
      },
    ])
    .select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }
});

app.post("/1900", async (req, res) => {
  console.log("Adding Info");

  console.log(req.body);

  var e_d = req.body.e_d;
  var dwelling = req.body.dwelling;
  var family = req.body.family;
  var houseNum = req.body.houseNum;
  var streetName = req.body.streetName;
  var lastName = req.body.lastName;
  var firstName = req.body.firstName;
  var headLast = req.body.headLast;
  var headFirst = req.body.headFirst;
  var relat = req.body.relat;
  var rac_e = req.body.rac_e;
  var se_x = req.body.se_x;
  var ag_e = req.body.ag_e;
  var marit = req.body.marit;
  var placeBirth = req.body.place_Birth;
  var wor_k = req.body.wor_k;

  const { data, error } = await supabase
    .from("1900_census")
    .insert([
      {
        ed: e_d,
        dwelling: dwelling,
        family: family,
        house_num: houseNum,
        street_name: streetName,
        last_name: lastName,
        first_name: firstName,
        head_last: headLast,
        head_first: headFirst,
        relation_head: relat,
        race: rac_e,
        sex: se_x,
        age: ag_e,
        marital: marit,
        place_birth: placeBirth,
        work: wor_k,
      },
    ])
    .select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }
});

app.post("/1965", async (req, res) => {
  console.log("Adding Info");

  console.log(req.body);

  var houseNum = req.body.houseNum;
  var streetName = req.body.streetName;
  var lastName = req.body.lastName;
  var firstName = req.body.firstName;

  const { data, error } = await supabase
    .from("1965_voters")
    .insert([
      {
        house_num: houseNum,
        street_name: streetName,
        last_name: lastName,
        first_name: firstName,
      },
    ])
    .select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }
});

const fetchData1950 = async (filters) => {
  let query = supabase.from("1950_census").select("*");

  // Dynamically add filters to the query
  Object.keys(filters).forEach((field) => {
    if (filters[field]) {
      query = query.eq(field, filters[field]);
    }
  });

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

app.post("/query1950", async (req, res) => {
  const filters = req.body;

  try {
    const data = await fetchData1950(filters);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const fetchData1900 = async (filters) => {
  let query = supabase.from("1900_census").select("*");

  // Dynamically add filters to the query
  Object.keys(filters).forEach((field) => {
    if (filters[field]) {
      query = query.eq(field, filters[field]);
    }
  });

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

app.post("/query1900", async (req, res) => {
  const filters = req.body;

  try {
    const data = await fetchData1900(filters);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const fetchData1920 = async (filters) => {
  let query = supabase.from("1920_census").select("*");

  // Dynamically add filters to the query
  Object.keys(filters).forEach((field) => {
    if (filters[field]) {
      query = query.eq(field, filters[field]);
    }
  });

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

app.post("/query1920", async (req, res) => {
  const filters = req.body;

  try {
    const data = await fetchData1920(filters);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const fetchData1930 = async (filters) => {
  let query = supabase.from("1930_census").select("*");

  // Dynamically add filters to the query
  Object.keys(filters).forEach((field) => {
    if (filters[field]) {
      query = query.eq(field, filters[field]);
    }
  });

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

app.post("/query1930", async (req, res) => {
  const filters = req.body;

  try {
    const data = await fetchData1930(filters);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const fetchData1940 = async (filters) => {
  let query = supabase.from("1940_census").select("*");

  // Dynamically add filters to the query
  Object.keys(filters).forEach((field) => {
    if (filters[field]) {
      query = query.eq(field, filters[field]);
    }
  });

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

app.post("/query1940", async (req, res) => {
  const filters = req.body;

  try {
    const data = await fetchData1940(filters);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const fetchData1965 = async (filters) => {
  let query = supabase.from("1965_voters").select("*");

  // Dynamically add filters to the query
  Object.keys(filters).forEach((field) => {
    if (filters[field]) {
      query = query.eq(field, filters[field]);
    }
  });

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

app.post("/query1965", async (req, res) => {
  const filters = req.body;

  try {
    const data = await fetchData1965(filters);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log("App is alive!");
});
