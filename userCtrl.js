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

putUser = (req, res, next) => {};

addUser = (req, res, next) => {};

delUser = (req, res, next) => {};

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