const accountsModel = require('../models/accounts.model');


const createAccount = (req, res) => {
    // const data = req.body;
    const {roomName, roomNumber, floor} = req.body;
    if (roomNumber < 0) {
        return res.json({"error": "asfsaf"})
    }
    const room = new accountsModel({
        roomName: roomName,
        roomNumber: roomNumber,
        floor: floor,
    });
    room.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": room})
    });


}

const getAccount = (req, res) => {
    accountsModel.find({}).then((rooms) => {
        return res.send(rooms)
    });
}

module.exports = {
    create: createAccount,
    getAll: getAccount,
}
