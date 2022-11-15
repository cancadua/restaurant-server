const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())

require("./routes/routes")(app);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });