const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.get('/pic', (req, res) => {
    res.status(200).send({
        status: `ONLINE`,
        options: `NONE`,
    })
});

app.post('/pic/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'Needs a logo!' })
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    })
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
