const { Router } = require('express');
const router = Router();

const UserModel = require('../models/User');

router.route('/profile')
    .get((req, res) => res.status(200).json({message: 'Get - Profile'}))
    .post((req, res) => res.status(200).json({message: 'Post - Profile'}))
    .put((req, res) => res.status(200).json({message: 'Put - Profile'}))
    .delete((req, res) => res.status(200).json({message: 'Delete - Profile'}));

module.exports = router;