const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pdfRoute = require('./src/routes/pdfmake');

const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendfile('index.html');
});

app.use('/pdfMake', pdfRoute);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

