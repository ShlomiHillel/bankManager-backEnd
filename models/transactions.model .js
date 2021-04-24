const mongoose = require('mongoose');
const transactionsSchema = mongoose.Schema({
    roomName: {
        type: String,
        required: false,
        unique: false,
        max : 9,
        min:9
    },
    roomNumber: {
        type: Number,
        required: true,
        unique: true
    },
    floor: {
        type: Number,
        required: true,
        unique: false,


        validate(value) {
            if(value < 0 || value > 100 || value === 3){
                throw new Error('floor number must be 0 or more')
            }
        }
    },
    isActive: {
        type: Boolean,
        required: false,
        unique: false,
        default : true
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
