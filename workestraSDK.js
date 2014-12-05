var http = require('http');
var https = require('https');
var request = require("request");


function workestraSDK() {

	this.endpoint = 'www.workestra.co/api/v1';
    this.basicAuthUsername = '';
    this.basicAuthPassword = '';
    this.ssl = true;




}


workestraSDK.prototype.setBasicAuth = function(username, password) {

	this.basicAuthUsername = username;
    this.basicAuthPassword = password;

}


workestraSDK.prototype.setApiKey = function(key) {

	this.basicAuthUsername = key;
    this.basicAuthPassword = 'w';

}

workestraSDK.prototype.listNotifications = function(callback) {



		var options = {
            rejectUnauthorized: this.strictSSL,
            uri: '/notifications',
            method: 'GET'
        };


         this.doRequest(options, function(error, response, body) {


            if (error) {
                callback(error, null);
                return;
            }

            if (response.statusCode === 404) {
                callback('Invalid version.');
                return;
            }

            if (response.statusCode !== 200) {
                callback(response.statusCode + ': Unable to connect to Workestra');
                return;
            }

            body = JSON.parse(body);
            callback(body);

        });


}





workestraSDK.prototype.doRequest = function(options, callback) {

 		
 		    endurl = 'https://' + this.basicAuthUsername + ':' + this.basicAuthPassword + '@' + this.endpoint + options.uri;


			request({url: endurl, rejectUnauthorized : true , method : options.method}, callback);



    };





module.exports = workestraSDK;

