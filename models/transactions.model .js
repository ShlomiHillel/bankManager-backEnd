const mongoose = require('mongoose');
const transactionsSchema = mongoose.Schema({
    toAccountNumber: {
        type: Number,
        required: true,
        unique: true,
        max : 9,
        min: 5,
    },
    fromAccountNumber: {
        type: Number,
        required: true,
        unique: true,
        max : 9,
        min: 5,
    },
    action : {
        type : String,
        required : true,
        unique : false
    },
    amount : {
        type : Number,
        required : true,
        unique : false
    },
    date: {
        type: Date,
        required: false,
        unique: false,
        default : Date.now()
    }
})

const transactionsModel  = mongoose.model('transactions',transactionsSchema);
module.exports= transactionsModel;
// module.exports = mongoose.model('rooms',roomSchema);
