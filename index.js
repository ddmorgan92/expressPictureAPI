const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json({limit: '50mb'}) )

/*app.get('/pic', (req, res) => {
    res.status(200).send({
        status: `ONLINE`,
        options: `NONE`,
    })
});*/


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

    res.send(req);
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

/*app.post('/pic/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'Needs a logo!' })
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    })
}); */