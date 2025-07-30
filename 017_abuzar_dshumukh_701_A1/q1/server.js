const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/gethello',(req,res)=>{
    res.send("hello page")
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log('server running success');
}); 