const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
app.use(cors());
app.use(express.json());
const db=require("./src/config/database");

db();


//add all routes
const routes =require('./src/routes/AllRoutes');
app.use('/api',routes);



app.get('/', (req, res) => {
    res.send(`<h1> Hello, server is running </h1>`);
});


const PORT=process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
