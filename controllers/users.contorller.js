
const usersModel = require('../models/users.model');


const createUser = (req, res) => {
    const {userName, userIdNumber} = req.body;
    if (roomNumber < 0) {
        return res.json({'error': 'error, but dont Worry, you will be OK'})
    }
    const user = new usersModel({
        userName: userName,
        userIdNumber: userIdNumber,
    });
    user.save((err) => {
        if (err) return res.json({'error': err})
        return res.json({'success': userIdNumber})
    });


}

const getUser = (req, res) => {
    usersModel.find({}).then((users) => {
        return res.send(users)
    });
}

module.exports = {
    create: createUser,
    getAll: getUser,
}
