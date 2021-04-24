const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: false,
        max : 15,
        min: 2,
    },
    userIdNumber: {
        type: Number,
        required: true,
        unique: true,
        max : 9999999,
        min: 000000001,
    },
    // isActive: {
    //     type: Boolean,
    //     required: false,
    //     unique: false,
    //     default : true,
    // },
    // birthDate: {
    //     type: Date,
    //     required: false,
    //     unique: false,
    //     default : Date.now(),
    // }
})

const usersModel  = mongoose.model('users',usersSchema);
module.exports= usersModel;
// module.exports = mongoose.model('rooms',roomSchema);
