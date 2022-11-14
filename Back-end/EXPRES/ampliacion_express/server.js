const express = require('express');


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/public', express.static('public/otro'))
app.use('/public2', express.static('public'))

app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);