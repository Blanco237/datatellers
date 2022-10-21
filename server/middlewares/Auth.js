const { verify } = require('jsonwebtoken');
require('dotenv').config();

const validateRequest = (req, res, next) => {
    const token = req.headers.token;
    if(!token){
        res.status(400).json({error: "Auth Token Not Found in Headers"});
        return;
    }
    try{
        const validToken = verify(token, process.env.JWT_SECRET);
        if(validToken) {
            return next();
        }
        else{
            res.status(400).json({error: "Unauthorized Request"});
        }
    }
    catch(e) {
        res.status(400).json({error: e.message});
    }
}

module.exports = validateRequest;