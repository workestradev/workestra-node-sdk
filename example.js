var workestrasdk = require('./workestraSDK');


//Create a new instance of the SDK
var workestra = new workestrasdk();

//set your Api key
workestra.setApiKey('{Your-Api-Key}');

//or use basic authentication
workestra.setBasicAuth('{Email}','{Password}');


//list the latest notification
workestra.listNotification(function(response){

console.log(response);


});

