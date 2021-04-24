
const usersModel = require('../models/users.model');


const createUser = (req, res) => {
    const {userName, userIdNumber} = req.body;
    
    const user = new usersModel({
        userName: userName,
        userIdNumber: userIdNumber,
    });
    user.save((err) => {
        if (err) return res.json({'error': err})
        return res.status(200).json({user})
    });
}

const getAllUsers = (req, res) => {
    usersModel.find({}).then((users) => {
        return res.send(users)
    });
}

const getUser = (req, res) => {
    usersModel.find({}).then((user) => {
        return res.send(user)
    });
}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
}
