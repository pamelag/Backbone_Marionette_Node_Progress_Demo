var express = require('express')
    , routes = require('./routes')

    , http = require('http')
    , path = require('path')
    ,   _ = require('underscore')
    , cons = require('consolidate');

var app = express();

app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view options', {layout: false});
app.engine('html', cons.underscore);
app.set('view engine', 'html');
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

app.get('/test', function(req, res) {
    res.render('test.html');
});

app.get('/notes', function(req, res) {
    res.render('notes.html');
});

app.use(function(err, req, res, next) {
    res.send(500, { error: err });
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

});