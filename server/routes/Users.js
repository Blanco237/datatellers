const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const validateRequest = require('../middlewares/Auth');

require('dotenv').config();

const { Users } = require('../models');

//Encryption Level
const encLevel = parseInt(process.env.BCRYPT_ENC_LEVEL);

//Secret Key
const JWT_SECRET = process.env.JWT_SECRET;


router.post('/check', async (req, res) => {
    const { token } = req.headers;
    try {
        const decoded = await jwt.verify(token, JWT_SECRET);
        res.json(decoded);
    } catch (e) {
        res.status(400).json({ error: "Invalid User" });
    }
});


// {
// 	"username" : "Ngwashi",
// 	"password" : "ng-admin237"
// }
// {
// 	"username" : "Neba",
// 	"password" : "ng-sec237"
// }

router.post('/register', validateRequest , async (req, res) => {
    if(req.user.role !== "admin"){
        res.json({error: "Request Not Authorized"});
        return;
    }
    const { password } = req.body;
    const data = req.body;
    const salt = await bcrypt.genSalt(encLevel);
    let hashedPassword = await bcrypt.hash(password, salt);
    data.password = hashedPassword;
    try {
        await Users.create(data);
        const key = jwt.sign(JSON.stringify(data), JWT_SECRET);
        res.json(key);
    } catch (e) {
        console.error(e);
        res.status(400).json({ error: e.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const data = await Users.findOne({
        where: {
            username,
        }
    });

    if (data) {
        const match = await bcrypt.compare(password, data.password);
        if (match) {
            const key = jwt.sign(JSON.stringify(data.dataValues), JWT_SECRET);
            res.json(key);
        }
        else {
            res.json({ error: `Wrong password for ${username}` });
        }
    }
    else {
        res.json({ error: 'User Not Found' });
    }
}
);


module.exports = router;