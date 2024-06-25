const express = require('express');
const app = express();
app.use(express.json())

let teaData = [];
let nextId = 1


app.post('/teas', (req, res) => {
    const { name, price } = req.body;
    const newTea = { id: nextId++, name, price };
    teaData.push(newTea);

    res.status(201).send(newTea)
})

app.get('/teas', (req, res) => {
    res.status(201).send(teaData)
});

app.get('/teas/:id', (req, res) => {
    const id = req.params.id;
    console.log(typeof id);
    const result = teaData.find(item => item.id === parseInt(id) ? item : console.log(item));
    console.log('RESULT: ', result);
    if(result) {
        res.status(201).send(result)
    } else {
        res.status(400).send('NOT FOUND')
    }
})


function start () {
    app.listen(4000, () => console.log('App is listening to port: 4000'))
}

start()

