const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/TodoController');

router.get('/',TodoController.index);
router.post('/',TodoController.store);
router.post('/update/todo',TodoController.update);

router.get('/:id',TodoController.view);
router.get('/delete/:id',TodoController.removeid);




module.exports = router;
