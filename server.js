const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require("./routes"));


app.listen(3002, () => {
    console.log('API server now on Port 3002')
});