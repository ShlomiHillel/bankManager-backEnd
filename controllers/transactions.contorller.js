
const transactionsModel = require('../models/transactions.model ');



const createTransactions = (req, res) => {
  
    const {} = req.body;
    
    const transaction = new transactionsModel({
        
    });
    transaction.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": transaction})
    });


}



module.exports = {
    createTransactions,
    
}