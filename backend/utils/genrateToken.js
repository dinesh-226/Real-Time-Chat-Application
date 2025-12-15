const jwt = require("jsonwebtoken");

const generateToken = (user) =>{
    return jwt.sign(
        {userID:user._id,name:user.name},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPRESS_IN || "7d"}
    )
}

module.exports = generateToken