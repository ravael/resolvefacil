var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

    var porta = process.env.PORT || 3000;
    

http.createServer(app).listen(porta, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});

