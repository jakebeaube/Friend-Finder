let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('app'));


require('./app/routing/apiroutes.js')(app);
require('./app/routing/htmlroutes.js')(app);


app.listen(PORT, function() {
	console.log("Friend Finder is listening on port: " + PORT);
});