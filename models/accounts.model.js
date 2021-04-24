const mongoose = require('mongoose');
const accountsSchema = mongoose.Schema({
    accountName: {
        type: String,
        required: false,
        unique: false,
        max : 15,
        min:2,
    },
    accountNumber: {
        type: Number,
        required: true,
        // unique: true,
        // max : 9,
        // min: 5,

        // validate(value) {
        //     if(value < 00001 || value > 9999999 || value === 3){
        //         throw new Error('account number must be 0 or more')
        //     }
        // }
    },
    userIdNumber: {
        type: Number,
        required: true,
        unique: true,
        max : 9999999,
        min: 000000001,
    },
    balance : {
        type : Number,
        required : false,
        unique: false,
        default : 0
    },
    credit : {
        type : Number,
        required : false,
        unique: false,
        default : 0
    },
    isActive: {
        type: Boolean,
        required: false,
        unique: false,
        default : true
    },
    // openDate: {
    //     type: Date,
    //     required: false,
    //     unique: false,
    //     default : Date.now()
    // }
})

const accountsModel  = mongoose.model('accounts',accountsSchema);
module.exports= accountsModel;
// module.exports = mongoose.model('rooms',roomSchema);
