const accountsModel = require('../models/accounts.model');


const createAccount = (req, res) => {
    
    const {accountName} = req.body;
    
    const account = new accountsModel({
        accountName: accountName,
        accountNumber: accountNumber,
        balance: balance,
        credit: credit,
        isActive: true,
        openDate: openDate,
    });
    account.save((err) => {
        if (err) return res.json({"error": err})
        return res.status(200).json({accountNumber})
    });


}

// const getAccount = (req, res) => {
//     accountsModel.find({}).then((x) => {
//         return res.send(x)
//     });
// }

module.exports = {
    createAccount,
    // getAccount: getAccount,
}
