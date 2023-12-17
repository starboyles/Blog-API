const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());

const blogs = JSON.parse(fs.readFileSync(`${__dirname}/assets/data/blogs-data.json`));

app.get('/api/v1/blogs', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            blogs
        }
    });
});

app.post('/api/v1/blog', (req, res) => {
    res.status(200).json({
    
    });
});




const port = 8001;
app.listen(port, () => {
    console.log('App runs on port ${port}.. ')
});