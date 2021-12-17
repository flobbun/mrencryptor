const express = require('express');
const router = express.Router();
const auth = express.Router();
const {ef, df, iterate} = require('../funcs.js');
const gData = { title: 'Mr.Encryptor' };

// Routes
router.get('/', (req, res) => res.render('index', gData));
router.get('/security', (req, res) => res.render('security', gData));
router.get('/contact', (req, res) => res.render('contact', gData));
router.get('/signup', (req, res) => res.render('signup', gData));
router.get('/signin', (req, res) => res.render('signin', gData));

router.post('/encrypt', (req, res)=> {
  let output = undefined;

  if(req.body.mode == 'Encrypt')
    output = iterate(req.body.input, ef[req.body.protocol], req.body.iterations);
  else if(req.body.mode == 'Decrypt')
    output = iterate(req.body.input, df[req.body.protocol], req.body.iterations);

  if (output)
    res.status(200).json({status: 'OK', output});
  else
    res.status(400)
});

module.exports = router;
