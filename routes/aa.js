const fetch = require("node-fetch");


fetch("https://mbillexprod.alipay.com/enterprise/fundAccountDetail.json", {
    method: "POST",
    credentials: 'include',
    headers: {
        Accept: "application/json, text/javascript",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        connection: 'keep-alive',
        origin: 'https://mbillexprod.alipay.com',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3452.0 Safari/537.36',
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        cookie: `JSESSIONID=RZ25CQeEi6he9tPG9ANaAajCYNOIEiauthRZ11GZ00; mobileSendTime=-1; credibleMobileSendTime=-1; ctuMobileSendTime=-1; riskMobileBankSendTime=-1; riskMobileAccoutSendTime=-1; riskMobileCreditSendTime=-1; riskCredibleMobileSendTime=-1; riskOriginalAccountMobileSendTime=-1; cna=aIyvEzl520ICAQHK+xq7p7ie; UM_distinctid=1645b54f26a518-0dcd54426f20da-665d752c-144000-1645b54f26b441; iw.userid="K1iSL1mkbIUsSDpsHDs08Q=="; alipay="K1iSL1mkbIUsSDpsHDs08Tipg9Vo7FjSg3ZVXngVGw=="; ctoken=b5FAorKV9sUrQO0Q; LoginForm=alipay_login_auth; CLUB_ALIPAY_COM=2088012869002284; ali_apache_tracktmp="uid=2088012869002284"; session.cookieNameId=ALIPAYJSESSIONID; ALIPAYJSESSIONID=RZ25CQeEi6he9tPG9ANaAajCYNOIEiauthRZ11GZ00; zone=GZ00D; rtk=nlbMC9gZrgiDs3Ufel1Lz16ARL7dDaSWNtJupuU67ucpDwRE7Lg; JSESSIONID=77517C7B37AE932F09F017AE59C303C3; ssl_upgrade=0; spanner=UPufLL8uXhYouNdr4A83fpbKDItuSMTn4EJoL7C0n0A=; CNZZDATA1253107971=1372919562-1530538777-https%253A%252F%252Fmrchportalweb.alipay.com%252F%7C1530883091`
    },
    body: "queryEntrance=1&billUserId=2088012869002284&showType=1&type=TRANSFER&precisionQueryKey=tradeNo&startDateInput=2018-06-07%2000%3A00%3A00&endDateInput=2018-07-07%2000%3A00%3A00&pageSize=20&pageNum=1&total=3&sortTarget=tradeTime&order=descend&sortType=0&_input_charset=gbk&ctoken=b5FAorKV9sUrQO0Q"
}).then((r) => {
    return r.text()
}).then((s) => {
    console.log(s);
})
