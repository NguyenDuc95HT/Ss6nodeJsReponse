'use strict';
const request = require('request');
export default class RequestHelper {
    executeRequest = (uri, method, data) => {
        return new Promise((resolve, reject) => {
            request(
                {
                    method,
                    uri,
                    json: (typeof data === 'string')? JSON.stringify(data) : data
                }
                , function (error, response, body) {
                    if(error){
                        reject(error);
                    } else {
                        try {
                            (typeof body === 'object')? resolve(body): resolve(JSON.parse(body));

                        }
                        catch (e) {
                            console.log(e.message);
                        }
                    }
                }
            )
        })
    };

};
