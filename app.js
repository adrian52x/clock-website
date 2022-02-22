const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});


app.get("/location", (req, res) => {
    res.sendFile(__dirname + "/public/location.html")
});




const host = '0.0.0.0';
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})