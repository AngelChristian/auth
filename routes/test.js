const router = require('express').Router();
const {
    isSignedIn
} = require("../controllers/login");

router.get("/",isSignedIn,(req,res)=>{
    res.send("Welcome to a protected route");
});


module.exports = router;