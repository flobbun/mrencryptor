const express = require('express');
const router = express.Router();
// const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
// const auth = getAuth();

// function SignUp(auth, email, password)
// {
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }

// function SignIn(auth, email, password)
// {
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }

router.get('/signup', (req, res) => {
  const {email, password} = req.body.userdata;
  if (email && password)
  {
    // SignUp(auth, email, password);
  }
  res.status(400).json({msg: "Invalid data"});
});

router.get('/signin', (req, res) => {
  if (req.body.userdata)
  {

  }
  res.status(400).json({msg: "Invalid data"});
});

module.exports = router;
