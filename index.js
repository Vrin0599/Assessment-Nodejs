// Assessement task

const express = require("express");
const bodyParser = require("body-parser");

const routers = require("./routers");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1", routers);

app.listen(8080, console.log("Server Is Running!!!"));
