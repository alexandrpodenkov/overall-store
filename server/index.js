require('dotenv').config();
const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);


app.listen(PORT, () => console.log(`Server started on ${PORT}`));