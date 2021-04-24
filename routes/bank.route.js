const express = require('express');
const router = express.Router();
const accountsControler = require('../controllers/accounts.contorller');
const transactionsControler = require('../controllers/transactions.contorller');
const usersControler = require('../controllers/users.contorller');




router.post('/addUser', (req, res) => {
   console.log("add");
   usersControler.addUser(req, res);    
})

router.put('/deposit/:id', (req, res) => {
   console.log("deposit");
   transactionsControler.deposit(req, res);    
})

router.put('/credit/:id',(req, res) => {
   console.log("credit");
   accountsControler.creditUpdate(req, res);    
})
router.put('/withdraw/:id',(req, res) => {
   console.log("withdraw");
   transactionsControler.withdraw(req, res);    
})

router.put('/transfer/:id1/:id2',(req, res) => {
   console.log("transfer");
   transactionsControler.transfer(req, res);    
})
router.get('/allUsers',(req, res) => {
   console.log("showAllUsers");
   usersControler.getAll(req, res);
})

router.get('/user/:id',(req, res) => {
   console.log("showOneUser");
   usersControler.getUser(req, res)
})


module.exports = router;
