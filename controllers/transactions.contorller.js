
const transactionsModel = require('../models/transactions.model ');
const accountsModel = require('../models/accounts.model');

// ============= deposit ===================
const deposit = async (req, res) => {
    const {amount} = req.body;
    const {accountNumber} = req.params
try {
    //update account
    const account = await accountsModel.findByIdAndUpdate(
        accountNumber,
      	{ $inc: { balance:  amount } },
    	{ new: true, runValidators: true }
		);  
    } catch (err) {
        throw new Error(err)  
    }  
try {    
    //new transaction
    const transaction = new transactionsModel({
        toAccountNumber: accountNumber, 
        fromAccountNumber: accountNumber ,    
        action: 'deposit',
        amount: amount,
        date: new Date()
    });
    const aprove = await transaction.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": aprove})
    });
} catch (err) {
    throw new Error(err)  
}  
}

// ============= withdraw ===================
const withdraw = async (req, res) => {
    const {amount} = req.body;
    const {accountNumber} = req.params
try {
    //update account
    const account = await accountsModel.findByIdAndUpdate(
        accountNumber,
      	{ $inc: { balance:  -(amount) } },
    	{ new: true, runValidators: true }
		);  
    } catch (err) {
        throw new Error(err)  
    } 
try { 
    
    //new transaction
    const transaction = new transactionsModel({
        toAccountNumber: accountNumber, 
        fromAccountNumber: accountNumber ,    
        action: 'withdraw',
        amount: -(amount),
        date: new Date()
    });
    const aprove = await transaction.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": aprove})
    });
} catch (err) {
    throw new Error(err)  
}  
}


// ============= transfer ===================
const transfer = async (req, res) => {
    const {amount} = req.body;
    const {toAccountNumber, fromAccountNumber} = req.params
try {
    //update account
    const accountTo = await accountsModel.findByIdAndUpdate(
        toAccountNumber,
      	{ $inc: { balance:  amount } },
    	{ new: true, runValidators: true }
		);  
    const accountFrom = await accountsModel.findByIdAndUpdate(
        fromAccountNumber,
      	{ $inc: { balance: -(amount) } },
    	{ new: true, runValidators: true }
		);  
    } catch (err) {
        throw new Error(err)  
    } 
try { 
    
    //new transaction
    const transaction = new transactionsModel({
        toAccountNumber: toAccountNumber, 
        fromAccountNumber: fromAccountNumber ,    
        action: 'transfer',
        amount: amount,
        date: new Date()
        
    });
    const aprove = await transaction.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": aprove})
    });
} catch (err) {
    throw new Error(err)  
}  
}

module.exports = {
    deposit,
    withdraw,
    transfer,
    
}