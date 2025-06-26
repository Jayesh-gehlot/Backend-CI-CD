const express = require("express");

const PORT = 5008;
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Hello CI CD');
});

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.send("Signup data received");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
