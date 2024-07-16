const express = require("express");
const app = express();
const dbConnect = require("./database/database");

const cors = require("cors")
app.use(cors());

app.use(express.json());
require("dotenv").config();

const port = process.env.PORT;

const dishRoute = require("./routes/dishes")
app.use("/api", dishRoute);

app.get("/", (req,res) => {
    res.send("Server running")
})


dbConnect();

app.listen( port, ()=> {
    console.log(`Server started at http://localhost:${port}`)
})

    
