const userData = require('./userData.json');

getUser = (req, res, next) => {

    if(req.query.age){
        res.status(200).send(userData.filter(user => {
            return user.age < req.query.age;
        }))
    }
    else if(req.query.lastname){
        res.status(200).send(userData.filter(user => {
            return user.last_name === req.query.lastname;
        }))
    }
    else if(req.query.email){
        res.status(200).send(userData.filter(user => {
            return user.email === req.query.email;
        }))
    }
    else if(req.query.favorites){
        res.status(200).send(userData.filter(user => {
            return user.favorites.includes(req.query.favorites);
        }))
    }
    else{
        res.json(userData)
    }
};

getUserId = (req, res, next) => {
    if(req.params.id > 0 && req.params.id < userData.length){
        res.status(200).send(userData.find(user => {
            const reqId = parseInt(req.params.id);
            return user.id === reqId;
        }))
    }
    else{
        res.status(404).json(null);
    }
};

getAdmins = (req, res, next) => {
    res.status(200).send(userData.filter(user => {
        return user.type === "admin"
    }))
};

getNonAdmins = (req, res, next) => {
    res.status(200).send(userData.filter(user => {
        return user.type != "admin"
    }))
};

getUserType = (req, res, next) => {
    console.log("function accessed")
    if(req.params.type){
        console.log("if statement accessed")
        res.status(200).send(userData.filter(user => {
            console.log("filter accessed")
            return user.type === req.params.type;
        }))
    }
    else if(req.params.type){
        res.status(200).send(userData.filter(user => {
            return user.type === req.params.type;
        }))
    }
    else if(req.params.type){
        res.status(200).send(userData.filter(user => {
            return user.type === req.params.type;
        }))
    }

};

putUser = (req, res, next) => {
    for(var i = 0; i < userData.length; i++){
        let reqId = parseInt(req.params.id);
        if(userData[i].id === reqId){
            userData[i] = req.body;
            
        }
    }
    res.status(200).send(userData)
};

addUser = (req, res, next) => {
    if(req.body){
        let id = userData.length+1;
        req.body.id = id;
        userData.push(req.body)
    }
    res.status(200).send(userData);
};

delUser = (req, res, next) => {
    if(req.params.id){
    for(var i = 0; i < userData.length; i++){
        if(userData[i].id === parseInt(req.params.id)){
            console.log("if statement accessed")
            userData.splice(i, 1);
        }
    }
    res.status(200).send(userData);
}
};

module.exports = {
    getUser,
    getUserId,
    getAdmins,
    getNonAdmins,
    getUserType,
    putUser,
    addUser,
    delUser
}