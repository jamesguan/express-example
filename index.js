require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const database = require('./database/connection');

const Dog = require('./database/Dog');

database.connect();

Dog.sync({ alter: true });

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.status(200).json({
       message: 'Helloworld',
   }) 
});

app.post('/dogs', async (req, res) => {
    const { dogName } = req.body;
    console.log(req.body);    

    const dog = await Dog.create({
        dogName,
    });

    dog.save();

    res.status(204).send();
});

app.get('/dogs', async (req, res) => {
    const dogs = await Dog.findAll();
    console.log(dogs);
    return res.json(dogs);
});

const server = app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server');
        throw err;
    }

    console.log(`Started on port ${PORT}`);
});


/*
example(3000, () => { console.log('James')});

function example (timeout, func) {
    console.log(timeout);
    setTimeout(func, timeout);
};
*/