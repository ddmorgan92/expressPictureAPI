const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use( express.json({limit: '50mb'}) );
app.use( cors() );

/* TODO
app.get('/pic', (req, res) => {
    res.status(200).send({
        status: `ONLINE`,
        options: `NONE`,
    })
});
*/


app.post('/pic/grayscale', (req, res) => {

    const { base64 } = req.body;

    if (!base64) {
        res.status(418).send({ message: 'Needs image data!' })
    }

    //TO DO
    const base64Decode = Buffer.from(base64.substring(23), "base64");
    console.log(base64Decode);

    fs.writeFile('image.jpg', base64Decode, {encoding: 'base64'}, function(err) {
        console.log('File created');
    });

    res.send(console.log("Picture saved successfully"));
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)