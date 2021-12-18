const { Router } = require('express');
const router = Router();

const UserModel = require('../models/User');

router.route('/profile')
    .get((req, res) => res.json({message: 'Get - Profile'}))
    .post((req, res) => res.json({message: 'Post - Profile'}))
    .put((req, res) => res.json({message: 'Put - Profile'}))
    .delete((req, res) => res.json({message: 'Delete - Profile'}));

module.exports = router;