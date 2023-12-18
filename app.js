const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());

const blogs = JSON.parse(fs.readFileSync(`${__dirname}/assets/data/blogs-simple.json`));

app.get('/api/v1/blogs', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: blogs.length,
        data: {
            blogs
        }
    });
});

app.post('/api/v1/blogs', (req, res) => {
   const newId = blogs[blogs.length - 1].id + 1;
   
   res.send ('Done');
});



const port = 8001;
app.listen(port, () => {
    console.log('backend running on ${port}.. ')
});