const express = require("express");
const bodyParser = require("body-parser");
const DATA = require('./DATA.json'); 
const app = express();

app.get("/test", (request, response) => {
    console.log('Сайт хочет получить доступ к данным для формы');
    response.json(DATA);
});

const parseData = bodyParser.urlencoded({extended: false});
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post("/test", parseData,  (request, response) => {
 
    if ( request.body.form ) {
        response.send(request.body.form);
    }
    response.send('Неправильно введенные данные');
});

app.listen(7000);
