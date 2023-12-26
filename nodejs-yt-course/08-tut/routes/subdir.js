const express = require('express');
const router = express.Router(); // this is a mini express app
const path = require('path'); // this is for path manipulation

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'));
});

router.get('/test(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'));
});

module.exports = router;