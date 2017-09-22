const express = require('express');
const { json } = require('body-parser');

const port = 3000;
// back from lunch edit
const app = express();

app.use(json());

const userCtrl = require('./userCtrl');

app.listen(port, ()=>{
    console.log(`listening on the lesser port of ${port}`);
})

app.get('/api/users', userCtrl.getUser); //PARMAS UGH
app.get('/api/users/:id', userCtrl.getUserId); //ID
app.get('/api/admins', userCtrl.getAdmins);
app.get('/api/nonadmins', userCtrl.getNonAdmins);
app.get('/api/user_type/:type', userCtrl.getUserType); //param: query
app.put('/api/users/:id', userCtrl.putUser); //param: NOT A query
app.post('/api/users', userCtrl.addUser); //body and query check
app.delete('/api/users/:id', userCtrl.delUser); //id