const mongoose = require('mongoose');
const mongoDB = "mongodb://alsong:nawire123@ds055925.mlab.com:55925/node_database";
mongoose.connect(mongoDB);

const app = require('./src/app');

app.listen(3000);