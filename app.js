const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my testing, add manual approve to code'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
