const express = require('express');
const router = express.Router();

const { Records } = require('../models');

const pad = (n) => {
    if (n < 10) {
        return '0' + n.toString();
    }
    return n;
}

const getCode = async () => {
    const count = await Records.count();
    const code = pad(count + 1);
    const d = new Date();
    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1);
    const year = d.getUTCFullYear().toString().slice(2, 4);

    const uniqueCode = `A${code}${day}${month}${year}`;

    return uniqueCode;
}

router.post('/save', async (req, res) => {
    const data = req.body;
    data.code = await getCode();
    console.log(data.code);
    data.firstTime = data.firstTime.toLowerCase() === "yes" ? true : false;

    try {
        const record = await Records.create(data);
        res.json(record);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.get('/all', async (req, res) => {
    try {
        const records = await Records.findAll();
        res.json(records);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.get('/byCode/:code', async (req, res) => {
    const { code } = req.params;
    try {
        const record = await Records.findByPk(code);
        res.json(record);
    }
    catch (e) {
        res.status(400).json({ error: e.message })
    }
})


module.exports = router;