const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const route = require('./routes');
const db = require('./config/db/index');

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

db.connect();

route(app);

app.listen(port, () => {
    console.log(`Server is running on port: ${ port }`);
});