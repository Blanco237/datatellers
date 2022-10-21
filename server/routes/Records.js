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

const formatPhoneNumber = (phone) => {
    if (!phone) {
        return;
    }
    let tPhone = phone.replace('+', '');
    if (tPhone.length > 9) {
        return tPhone.slice(3);
    }
    return tPhone;
}

router.post('/save', async (req, res) => {
    const data = req.body;
    data.code = await getCode();
    data.firstTime = data.firstTime.toLowerCase() === "yes" ? true : false;
    data.phone = formatPhoneNumber(data.phone);

    try {
        const record = await Records.create(data);
        res.json(record);
    }
    catch (e) {
        console.error(e);
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

router.get('/status/:status', async (req, res) => {
    const { status } = req.params;
    try {
        const count = await Records.count({
            where: {
                status
            }
        });
        res.json(count);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.post('/update', async (req, res) => {
    const data = req.body;
    try {
        const record = Records.update(data, {
            where: {
                code: data.code
            }
        })
        res.json(record);
    }
    catch (e) {
        res.status(400).json({ error: e.message })
    }
})


module.exports = router;