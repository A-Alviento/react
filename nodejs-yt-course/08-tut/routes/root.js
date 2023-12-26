const express = require('express');
const router = express.Router(); // this is a mini express app
const path = require('path'); // this is for path manipulation

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
});

router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default
});

module.exports = router;