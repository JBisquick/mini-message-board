const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Pass the beans!",
    user: "Bob",
    added: new Date()
  },
  {
    text: "COME ON YOU BEES!",
    user: "Brentfordfan69",
    added: new Date()
  }
];

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {});
});

router.post('/new', function(req, res) {
  messages.push({text: req.body.message, user: req.body.user, added: new Date()});
  res.redirect('/');
});

module.exports = router;
