var request = require('request');
const { ActivityTypes, MessageFactory, TurnContext } = require('botbuilder');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const { serviceMetadata } = require('../backendModel/metadata');


var username = 'KHANAA'
var password = 'Initial@1'


class IntentRouter {

    constructor() {
        this.url = 'https://vhcwhbh1ci.cwh.stl.hec.sap.biz:44300/sap/opu/odata/sap/Z630_VA_SRV/ZSDL_CP02_Q003_VAResults?$select=ZPHL3_GRP_T&$format=json';
    }


    fetchProducts(turnContext) {
        return new Promise(function (resolve, reject) {
            request({
                url: this.url,
                auth: {
                    user: username,
                    password: password
                }
            },
                function (error, response, body) {
                    var aValues = JSON.parse(body).d.results;
                    var aReplyValues = [];
                    aValues.forEach(function (e) {
                        aReplyValues.push(e.ZPHL3_GRP_T);
                    })
                    
                    var reply = MessageFactory.suggestedActions(aReplyValues, 'Select Product to view further details');
                    resolve(aReplyValues.join(','));
                });
        }.bind(this))
    }
};

module.exports.IntentRouter = IntentRouter;