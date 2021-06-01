const express = require('express');
const app = express();
const jsonParser = express.json();
const path = require('path');
const fs = require('fs');
const rootDir = path.join(path.resolve(), 'dist');
const rootFiles = path.join(path.resolve(), 'server');
const filePath=rootFiles+'/files/shop.json'


app.use(express.static(rootDir + "/"));

app.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'index.html'));
});

// GET all users json
app.get("/api/users",(req,res)=>{
    const content=fs.readFileSync(filePath,'utf8');
    const users=JSON.parse(content);
    res.send(users);
})


app.listen(7070, () => {
    console.log('server port 7070')

});


