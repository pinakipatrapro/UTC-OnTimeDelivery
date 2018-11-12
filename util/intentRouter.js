var request = require('request');
const { ActivityTypes, CardFactory, MessageFactory, TurnContext } = require('botbuilder');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const { serviceMetadata } = require('../backendModel/metadata');


var username = 'KHANAA'
var password = 'Initial@1'


class IntentRouter {

    constructor() {
        this.url = 'https://vhcwhbh1ci.cwh.stl.hec.sap.biz:44300/sap/opu/odata/sap/Z630_VA_SRV/ZSDL_CP02_Q003_VAResults?$format=json';
    }


    measurebydimension(measure, dimension) {
        var selectString = '&$select=' + [measure._Name, dimension._Name].join(',');
        return new Promise(function (resolve, reject) {
            request({
                url: this.url + selectString,
                auth: {
                    user: username,
                    password: password
                }
            },
                function (error, response, body) {
                    var aValues = JSON.parse(body).d.results;
                    var aReplyValues = [];
                    aValues.forEach(function (e) {
                        aReplyValues.push(
                            'For ' + dimension['_sap:label'] + ' ' + e[dimension._Name] + ' \n\nthe ' + measure['_sap:label'] + ' is ' + Math.round(e[measure._Name]*10)/10
                        );
                    })

                    // var reply = MessageFactory.suggestedActions(aReplyValues, 'Select Product to view further details');
                    // resolve(aReplyValues.join(','));
                    
                    resolve(MessageFactory.attachment(
                        CardFactory.heroCard(
                            aReplyValues.join(',\n'),
                            ['https://chart.googleapis.com/chart?chxt=x,y&cht=bvs&chd=s:cEj9U&chco=16A4FB&chls=4.0&chs=999x200&chxl=0:|Macintosh|Feb|Mar|Apr|May&chbh=30,70']
                        )
                    ));
                });
        }.bind(this))
    }
};

module.exports.IntentRouter = IntentRouter;