const accountsModel = require('../models/accounts.model');
const usersModel = require('../models/users.model');

const createAccount = (req, res) => {
    
    const {accountName, accountNumber, userIdNumber} = req.body;
    const account = new accountsModel({
        accountName: accountName,
        accountNumber: accountNumber,
        userIdNumber: userIdNumber,
        balance: 0,
        credit: 0,
        isActive: true,
        // openDate: openDate,
    });
    account.save((err) => {
        if (err) return res.json({"account error": err})
        return res.status(200).json({account})
    });


}

// const getAccount = (req, res) => {
//     accountsModel.find({}).then((x) => {
//         return res.send(x)
//     });
// }

module.exports = {
    createAccount: createAccount,
    // getAccount: getAccount,
}
