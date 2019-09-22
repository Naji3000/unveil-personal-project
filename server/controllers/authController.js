const bcyrpt = require('bcryptjs')



function registerUser(req, res){
    const {firstName, lastName, email, username, password} = req.body
    const db = req.app.get('db')
    db.checkForTakenUserNameOrEmail(username, email).then( count => {
        if(+count[0].count === 0 ){
            bcyrpt.hash(password, 12).then(hash => {
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
            res.status(409).json({
                error: "Username or Email Already Exist."
            })
        }
    })

}



module.exports = {
    registerUser
}