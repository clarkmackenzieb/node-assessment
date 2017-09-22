const express = require('express');
const { json } = require('body-parser');

const port = 3000;
// back from lunch edit
const app = express();

const userCtrl = require('./userCtrl');

app.listen(port, ()=>{
    console.log(`listening on the lesser port of ${port}`);
})

app.get('/api/users', userCtrl.getUser);
app.get('/api/users/:id', userCtrl.getUserId);
app.get('/api/admins', userCtrl.getAdmins);
app