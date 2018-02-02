require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , app = express();

const controller = require('./controller');

app.use(bodyParser.json());
app.use(cors());




//================ ENDPOINTS ==================//

app.get('/api/shelf/:id', controller.shelves);
app.get('/api/bin/:id', controller.bin);
app.put('/api/bin/:id', controller.update);
app.delete('/api/bin/:id', controller.delete);
app.post('/api/bin/:id', controller.add);


const port = 3001;
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})
app.listen(port, () => { console.log(`Secretly listening on ${port}`) });