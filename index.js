const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//dont forget cores



const app = express();
const router = require('./routes/bank.route');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/bank', router)

//connect to db with mongoose
mongoose.connect('mongodb+srv://admin:fAvQf0Pi1I0k0dwA@cluster0.kjayx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("database connect")
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`application start at ${process.env.PORT || 5000}`)
})
