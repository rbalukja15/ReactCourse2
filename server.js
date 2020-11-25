const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

// APIs
const items = require('./routes/api/items');

const app = express();

app.use(express.json());

// Get URI Key
const db = config.get('mongoURI');

// Connect to mongodb
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    returnOriginal: false
})
    .then(console.log('MongoDB is connected successfully'))
    .catch(error => console.log('Error connecting to MongoDB'));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));

