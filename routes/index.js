const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Mr.Encryptor' });
});

router.get('/encrypt', (req, res)=> {

});

module.exports = router;
