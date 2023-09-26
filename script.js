
const express = require('express')
const server = express('')
const port = 3000

server.get('/index.html')

server.get('/enviando', function (req, res) {
    res.send('/index.html!');
    console.log('')
});


server.listen(port, () => {
    console.log(`El nombre a llegado al puerto ${port}`)
});
