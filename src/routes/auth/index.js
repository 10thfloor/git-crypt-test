const authRouter = require('express').Router({ mergeParams: true });
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const {
  User
} = require('../../database/db');

module.exports = function authRoutes() {

  authRouter.use(bodyParser.json());
  authRouter.use(cookieParser());

  authRouter.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ where: {
      email
    }}).then((user) => {
      if(user) {

        const authed = user.verifyPassword(password);
        if(!authed) return res.status(403).json({ error: 'Wrong credentials.'});

        const sessionUser = { id: user.id, name: user.name, email: user.email };
        const JWT = jwt.sign(sessionUser, process.env.APP_SECRET);

        res.status(200).cookie('token', JWT, {
          secure: process.env.HTTPS,
          maxAge: 7200000, // 2 hrs
          httpOnly: true
        }).json({ success: 'You\'re logged in. Enjoy.'});

        } else {
          res.status(403).json({ error: 'User not found.'});
      }
    });
  });

  authRouter.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    User.findOrCreate({ where: {
      name,
      email,
      password
    }}).spread(function(user, created) {
        console.log(user, created);

        const sessionUser = { id: user.id, name: user.name, email: user.email };
        const JWT = jwt.sign(sessionUser, process.env.APP_SECRET);

        res.status(200).cookie('token', JWT, {
          secure: process.env.HTTPS,
          maxAge: 7200000, // 2 hrs
          httpOnly: true
        }).json({ success: 'You\'re logged in. Enjoy.'});
    }).catch((error) => {
        res.json({ error: error.errors });
    });
  });

  authRouter.post('/logout', (req, res) => {
    if(req.cookies.token) {
      res.clearCookie('token');
    }
    res.status(200).json({ success: 'Thank you come again.' });
  });

  authRouter.get('/checktoken', (req, res) => {
    if(req.cookies.token) {
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  });

  return authRouter;
}
