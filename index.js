// Assessement task

let express = require("express");
let bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// return number of male user and female user
app.post("/getCount", function (req, res) {
  let mc = 0; // mc= Male Count
  let fc = 0; // fc = Female
  req.body.results.forEach((item) => {
    if (item.gender === "male") {
      mc += 1;
    } else {
      fc += 1;
    }
  });
  res.send(200, {
    male: {
      count: mc,
    },
    female: {
      count: fc,
    },
  });
});

// return number of user  age between 50 and 70
app.post("/getAge", function (req, res) {
  let ic = 0; // ic = Individual Count

  req.body.results.forEach((item) => {
    if (item.dob.age > 50 && item.dob.age < 70) {
      ic += 1;
    }
  });
  res.send(200, ic);
});

// return user full name and email use | as
app.post("/getUserInfo", function (req, res) {
  let display = [];

  req.body.results.forEach((item) => {
    display.push(
      `${item.name.title} ${item.name.first} ${item.name.last} | ${item.email}`
    );
  });
  res.send(200, display);
});

// validate the user
app.post("/validate", (req, res) => {
  const userDetail = {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Jill",
      last: "White",
    },
    location: {
      street: {
        number: 3998,
        name: "E Sandy Lake Rd",
      },
      city: "Shepparton",
      state: "Tasmania",
      country: "Australia",
      postcode: 7651,
      coordinates: {
        latitude: "-88.3863",
        longitude: "37.9261",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "jill.white@example.com",
    login: {
      uuid: "7f6363ca-01e6-406c-8f4a-5b2ca8531ca6",
      username: "purplefrog742",
      password: "defiant",
      salt: "e5AdzWF0",
      md5: "74fa1cc7df0737ff6540592e965301a5",
      sha1: "cecca74dc47fba3648dcc948a65ba687ffb612ca",
      sha256:
        "ce2b115bddd4ccd7ab5a7f6354691fd96ca8e6ae424ab476298b65689c067fe0",
    },
    dob: {
      date: "1953-07-23T21:13:55.015Z",
      age: 69,
    },
    registered: {
      date: "2018-04-11T21:59:29.846Z",
      age: 4,
    },
    phone: "05-3217-6414",
    cell: "0422-163-459",
    id: {
      name: "TFN",
      value: "012890811",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
    },
    nat: "AU",
  };

  console.log(req.body);
  if (
    userDetail.login.username === req.body.username &&
    userDetail.login.password === req.body.password
  ) {
    delete userDetail.login; // removing the login details
    res.send(200, userDetail);
  } else {
    res.send(200, "username password not right");
  }
});

app.listen(8080, console.log("Server Is Running!!!"));
