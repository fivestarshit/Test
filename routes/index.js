var express = require('express');
var request = require('request');
const iconv = require("iconv-lite");
const qs = require("querystring");
const node = require("node-fetch");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(myValue)
    res.render('index', {title: 'Express'});
});

router.get('/find', function (req, res, next) {
    var head = req.headers;
    console.log(head);
    fetch("https://mbillexprod.alipay.com/enterprise/fundAccountDetail.json", {
        method: "POST", credentials: 'include',headers:head, body:"queryEntrance=1&billUserId=2088012869002284&showType=1&type=TRANSFER&precisionQueryKey=tradeNo&startDateInput=2018-06-07%2000%3A00%3A00&endDateInput=2018-07-07%2000%3A00%3A00&pageSize=20&pageNum=1&total=3&sortTarget=tradeTime&order=descend&sortType=0&_input_charset=gbk&ctoken=b5FAorKV9sUrQO0Q"
    }).then((r) => {
        return r.text()
    }).then((s) => {
        console.log(s);
    })


});

router.post('/save', function (req, res, next) {
    console.log(req.body);

    res.send({falge: "success"});
});

module.exports = router;
