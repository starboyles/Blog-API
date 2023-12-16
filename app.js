const express = require('express');
const app = express();


app.get('/api/v1/blog', (req, res) => {
    res.status(200);
    
} );




const port = 8001;
app.listen(port, () => {
    console.log('App runs on port ${port}.. ')
});