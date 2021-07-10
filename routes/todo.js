const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/TodoController');

router.get('/',TodoController.index);
router.post('/',TodoController.store);

module.exports = router;
