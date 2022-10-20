const express = require('express');
const router = express.Router();

const { Records } = require('../models');

const pad = (n) => {
    if (n < 10) {
        return '0' + n.toString();
    }
    return n;
}

const getCode = (code) => {
    const d = new Date();
    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1);
    const year = d.getUTCFullYear().toString().slice(2, 4);

    const uniqueCode = `${code}${day}${month}${year}`;

    return uniqueCode;
}

router.post('/save', async (req, res) => {
    const data = req.body;
    data.code = getCode(data.code);
    data.firstTime = firstTime.toLowerCase() === "yes" ? true : false;

    try {
        const record = await Records.create(data);
        res.json(record);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
})