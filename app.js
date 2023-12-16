const fs = require('fs');
const express = require('express');

const app = express();

const blog = fs.readFileSync(`${__dirname}/assets/data/blog-data.json`)

app.get('/api/v1/blog', (req, res) => {
    res.status(200);

});




const port = 8001;
app.listen(port, () => {
    console.log('App runs on port ${port}.. ')
});