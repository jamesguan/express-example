const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.status(200).json({
       message: 'Helloworld',
   }) 
});

const dogsList = [];

app.post('/dogs', (req, res) => {
    const { dogName } = req.body;
    console.log(req.body);
    dogsList.push(dogName);
    res.status(204).send();
});

app.get('/dogs', (req, res) => {
    return res.json(dogsList);
});

const server = app.listen(process.env.PORT, (err) => {
    if (err) {
        console.error('Error starting server');
        throw err;
    }

    console.log('Started on port 9001');
});


/*
example(3000, () => { console.log('James')});

function example (timeout, func) {
    console.log(timeout);
    setTimeout(func, timeout);
};
*/