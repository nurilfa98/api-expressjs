const express = require('express');

const UserController = require('../controllers/users');

const router = express.Router()

router.post('/', UserController.create)
router.get('/', UserController.findAll)
router.get('/:id', UserController.findOne)
router.patch('/:id', UserController.update)
router.delete('/:id', UserController.remove)

module.exports = router;