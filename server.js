var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store',function(req, res, next) {
	console.log('Jestem pośrednikiem przy żądaniu do /store');
	next();
});

app.get('/', function(req, res) {
	res.send('Hello world');
});

app.get('/store', function(req, res) {
	res.send('To jest sklep');
});

app.get('/first-view', function(req, res) {
    res.render('first-view');
});

app.get('/dynamic-view', function(req, res) {
    res.render('dynamic', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com"
    });
});

app.get('/dynamic', function(req, res) {
    res.render('dynamic', {
        user:
        { name: "Johnny", age: "20" }
    });
});

app.listen(3000);

app.use(function(req, res, next) {
	res.status(404).send('Wybacz, nie moglismy odnaleźć tego, czego żądasz!');
});