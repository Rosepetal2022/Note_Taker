const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require("./routes"));


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });