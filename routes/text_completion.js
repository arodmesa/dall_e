const express = require('express');
const router = express.Router();
const {request_completion, request_edit} = require ('../controllers/text_completion.js')

router.route('/completion').post(request_completion);
router.route('/edit').post(request_edit);

module.exports = router;

