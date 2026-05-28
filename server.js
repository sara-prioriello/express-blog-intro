const express = require('express');
const app = express();
const port = 3000;

//add listener
app.listen(port, () => {
    console.log(`Server listener http://localhost:${port}`);
});

//add routes
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});