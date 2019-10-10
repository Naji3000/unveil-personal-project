const bcrypt = require('bcryptjs')



async function registerUser(req, res){
    const {firstName, lastName, email, username, password} = req.body
    const db = req.app.get('db')
    const count =  await db.checkForTakenUsernameOrEmail(username, email)

    console.log(count)
    
        if(count.length === 0 ){
        bcrypt.hash(password, 12).then(hash => {
            db.registerUser(firstName, lastName, email, username, hash).then(()=> {

                req.session.user = {
                    firstName, 
                    lastName, 
                    email, 
                    username
                }
                res.status(200).json(req.session.user)
            })
        })
    } else {
        console.log("ac22")
        res.status(409).json({
            error: "Username or Email Already Exist."
        })
    }
}

function isUserTrue (req,res) {
    let bool = false;
    if (req.session.user){
        bool = true;
    }
    res.status(200).json(bool);
}



function loginUser(req,res) {
    const {username, password} = req.body
    const db = req.app.get('db');

    db.getPasswordUsername(username).then(user => {
        let hash = user[0].password;

        bcrypt.compare(password, hash).then(puSame => {
            if(puSame){

                req.session.user = {
                    username,
                    firstName: user[0].first_name,
                    lastName: user[0].last_name,
                    email: user[0].email
                }
                res.status(200).json(req.session.user)

            } else {
                res.status(401).json({
                    error: "Username or Password is incorrect"
                })
            }
        })
    })
}
function logoutUser (req, res) {
    req.session.destroy();
    res.sendStatus(200);
}



module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    isUserTrue
}