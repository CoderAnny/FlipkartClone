
const express = require("express");

const app = express();

const cors = require("cors");

const con = require("./db");


con.connection.on("connected",(err)=>{

    if(err)
    {
        console.log("Connection is Failed!");
    }
    else
    {
        console.log("Connection is Sucessful!");
    }
})

app.use(cors());

app.use(express.json());

app.use("/user",require("./routes/user"));


app.listen(5500,(err)=>{

    if(err)
    {
        console.log("Server is not Started");
    }
    else
    {
        console.log("Server is Started!");
    }

})