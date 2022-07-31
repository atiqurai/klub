const express = require('express');
const router = express.Router();
const transactionsMiddleware = require('../middleware/postTransactionApi');

router.post('/', (req, res, next) => {
    console.log("POST -START - TRANSACTIONS");
    console.log(req);
    const merchantID = req.body.meta_info.merchant.id;
        console.log("merchant ID found in body : " + merchantID);
    const result = transactionsMiddleware.findMerchantByMerchantID(merchantID);
        console.log("query output : " + result);
    console.log("POST -END - TRANSACTIONS");
});


exports.transactions = router;