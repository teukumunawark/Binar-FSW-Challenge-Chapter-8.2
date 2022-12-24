require('dotenv').config();
const express = require('express');
const carRoute = require('./src/routes/carRoute');
const authRoute = require('./src/routes/authRoute');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/auth', authRoute);

app.use('/api', carRoute);


app.listen(process.env.PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${process.env.PORT}`);
});