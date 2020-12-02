const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailSender = require('mailsender');


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};


const app = express();

app.use(cors(corsOptions));

const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/stevenMajek'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

// send email

app.route('/sendEmail').post((req, res) => {
    console.log(req.body);
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <ul>
        <li>Nombre: ${req.body.nombre}</li>
        <li>Asunto: ${req.body.asunto}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.mensaje}</p>
    `;
    send(req.body.asunto, output);
    res.send({ 'respuesta': 'enviado' });
});

function send(subject, message) {

    mailSender.from('stevenmajek@gmail.com', 'lastkingsteven123')
        .to('majek1@hotmail.com')
        .body(subject, message, true)
        .send();

}

server.listen(port, () => console.log('Listening to port', port));