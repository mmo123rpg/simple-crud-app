const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const Product = require('./models/product.model')
const productRoute = require("./routes/product.route")

//for POST and PUT
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes to make route
app.use("/", productRoute)

app.get('/', (req, res) => {
    res.send("Hello from port 3000")
})

mongoose.connect("mongodb+srv://hungau190888:sieuhnghng@backenddb.dgc4hle.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database");
        app.listen(PORT, () => {
            console.log('Server is running on port', PORT);
        });
    })
    .catch((err) => {
        console.error("Connection failed!", err);
    });

//mongodb+srv://<username>:<password>@backenddb.dgc4hle.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB
//mongodb+srv://<username>:<password>@backenddb.dgc4hle.mongodb.net/