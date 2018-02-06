require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , app = express();  //========== SIM1 74C INVOKE EXPRESS ==========//

const controller = require('./controller');

app.use(bodyParser.json()); //==========> SIM1 74J .JSON && 76F BODY PARSER <==========//
app.use(cors());
app.use(express.static(`${__dirname}/..public/build`)); //==========> SIM1 74E EXPRESS STATIC <==========//



//================ SIM1 74D GET, PUT, POST, DELETE && 76C RESTFUL URLs==================//

app.get('/api/shelf/:id', controller.shelves);
app.get('/api/bin/:id', controller.bin);
app.put('/api/bin/:id', controller.update);
app.delete('/api/bin/:id', controller.delete);
app.post('/api/bin/:id', controller.add);


const port = 3001;
massive(process.env.CONNECTION_STRING).then(db => {  //==========> SIM1 70 db FOLDER (SEE DB FOLDER) <==========//
    app.set('db', db);
})
app.listen(port, () => { console.log(`Secretly listening on ${port}`) });