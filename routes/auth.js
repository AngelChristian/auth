const router = require('express').Router();
// const { } = require("../controllers/auth");


router.get('/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  );

router.get('/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/api/test',
  failureRedirect: '/api'
}));

module.exports = router;