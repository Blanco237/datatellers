const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

require('dotenv').config();

const { Users } = require('../models');

//Encryption Level
const encLevel = process.env.BCRYPT_ENC_LEVEL;

//Secret Key
const JWT_SECRET = process.env.JWT_SECRET;


router.post('/check', async (req, res) => {
    const { token } = req.headers;
    const decoded = await jwt.verify(token, JWT_SECRET);
    res.json(decoded);
});


router.post('/register', async (req, res) => {
    const { password } = req.body;
    const data = req.body;
    let hashedPassword = bcrypt.hash(password, encLevel);
    data.password = hashedPassword;
    try{
        await Users.create(data);
        const key = jwt.sign(JSON.stringify(data), JWT_SECRET);
        res.json(key);
    }catch(e){
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

    if(data){
        const match = await bcrypt.compare(password, data.password);
        if(match){
            const key = jwt.sign(JSON.stringify(data.dataValues), JWT_SECRET);
            res.json(key);
        }
        else {
            res.status(400).json({error : `Wrong password for ${username}`});
        }
    }
    else{
        res.status(400).json({ error : 'User Not Found'});                                                                   
    }
}
);


module.exports = router;