const express = require('express');
const router = express.Router();
const rutesVideo = require('./rutesVideo');

router.use('/videos', rutesVideo);

module.exports = router;
