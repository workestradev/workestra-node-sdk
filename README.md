workestra-node-sdk
==========

A Node.js SDK library for the [Workestra API](https://www.workestra.co/developers/docs)



Quick Start
===========

You will need to install the popular request module if you already don't have it

````
npm install request

````



You will need an API key to get started. You can find instructions on obtaining an API key [here](https://www.workestra.co/developers/docs#authentication)

Once you have that, the following code will get the latest notifications (as long as your user is able to access those notifications)

````

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



````

After that, you may want to explore the stream [api](https://www.workestra.co/developers/docs#sream), or just look through the wrapper code.

