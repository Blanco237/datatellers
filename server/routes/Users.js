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

router.post('/check/username', async (req, res) => {
    const { username } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (user) {
        res.json({error: 'Username already exists'});
    }
    else {
        res.json({success: 'Username is available'});
    }
})

router.post('/check/email', async (req, res) => {
    const { email } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (user) {
        res.json({error: 'Email already exists'});
    }
    else {
        res.json({success: 'Email is available'});
    }
})


router.post('/register', async (req, res) => {
    const { password } = req.body;
    const data = req.body;
    let hashedPassword = await bcrypt.hash(password, encLevel);
    data.password = hashedPassword;
    try{
        await Users.create(data);
        const key = await jwt.sign(JSON.stringify(data), JWT_SECRET);
        res.json(key);
    }catch(e){
        res.status(400).json({ error: e.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const data = await Users.findOne({
        where: {
            email,
        }
    });

    if(data){
        const match = await bcrypt.compare(password, data.password);
        if(match){
            console.log("Passwords Match");
            const key = await jwt.sign(JSON.stringify(data.dataValues), JWT_SECRET);
            res.json(key);
        }
        else {
            res.json({'error' : `Wrong password for ${email}`});
        }
    }
    else{
        res.json({ "error" : 'User Not Found'});                                                                   
    }
}
);


module.exports = router;