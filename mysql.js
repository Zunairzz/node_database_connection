const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog_app_apis",
});

connection.connect((error) => {
    if (error) {
        console.log("Error connecting to the database: " + err.stack);
        return;
    } else {
        console.log("Connected to the database.");
    }
});

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/users", (req, res) => {
    connection.query("select * from users", (error, results) => {
        if (error) throw error;
        res.send(results);
    });
    connection.end();
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
