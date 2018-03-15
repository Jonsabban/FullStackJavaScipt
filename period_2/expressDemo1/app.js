const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from the index side'));
app.get('/other', (req, res) => res.send('Hello from the other side'));
app.post('/', (req, res) => res.send('Hello from the post side'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))
