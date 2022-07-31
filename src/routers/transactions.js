const express = require('express');
const { beginTransaction } = require('../database/connection');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.send("working");
    console.log("POST -START - TRANSACTIONS");
    console.log("POST -END - TRANSACTIONS");
});

exports.transactions = router;