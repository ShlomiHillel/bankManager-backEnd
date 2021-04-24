const express = require('express');
const router = express.Router();
const accountsControler = require('../controllers/accounts.contorller');
const transactionsControler = require('../controllers/transactions.contorller');
const usersControler = require('../controllers/users.contorller');




// accounts controler----------------
router.post('/accounts/addAccount', (req, res) => {
   console.log("add account");
   accountsControler.createAccount(req, res);    
})


//  transactions controler -----------------------------
router.put('/accounts/deposit/:id', (req, res) => {
   console.log("deposit");
   transactionsControler.deposit(req, res);  
   // accountsControler
})

router.put('/accounts/credit/:accountNumber',(req, res) => {
   console.log("credit");
   accountsControler.creditUpdate(req, res);    
})
router.put('/accounts/withdraw/:accountNumber',(req, res) => {
   console.log("withdraw");
   transactionsControler.withdraw(req, res);    
})

router.put('/accounts/transfer/:fromAccountNumber/:toAccountNumber',(req, res) => {
   console.log("transfer");
   transactionsControler.transfer(req, res);    
})

// user controler----------------
router.post('/users/addUser', (req, res) => {
   console.log("adduser");
   usersControler.createUser(req, res);    
})
router.get('/users/allUsers',(req, res) => {
   console.log("showAllUsers");
   usersControler.getAllUsers(req, res);
})
router.get('/users/user/:userIdNumber',(req, res) => {
   console.log("showOneUser");
   usersControler.getUser(req, res)
})


module.exports = router;
