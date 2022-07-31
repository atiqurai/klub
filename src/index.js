require('dotenv').config();
const express = require('express');
const connection =  require("./database/connection");
const transactionsRouter = require('./routers/transactions');

const PORT = process.env.SERVER_PORT;
const TRANSACTIONS_ROUTE = '/webhooks/transactions'; 

const app  = express();
app.use(TRANSACTIONS_ROUTE, transactionsRouter.transactions);

app.listen(PORT, (req, res) => 
    console.log("app is listening on port : " + PORT)
);
