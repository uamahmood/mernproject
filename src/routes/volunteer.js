const express = require("express");
const isAuth = require('../middleware/auth');
const Volunteer = require("../models/volunteer");
const router = express.Router();

router.post("/", isAuth,  (req, res) => {
    req.body.userId = req.user.id;
    var myData = new Volunteer(req.body);
    myData.save()
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
 });

router.get("/", isAuth, (req, res ) => {
    console.log('req uu==>>', req.user)
    Volunteer.find().then(volunteers => {
        res.send(volunteers)
    }).catch(err => {
        console.log('errr ==>>', err);
        res.status(500).send(err)
    })
})

router.delete("/", (req, res) => {
    Volunteer.deleteMany({}, ()=>{
        console.log("all volunteers deleted")
        res.send({msg: "all uers deleted"})
    })
})

router.delete("/:id", (req, res) => {
    Volunteer.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return (error);
          } else {
            console.log("volunteer deleted")
            res.send({msg: "volunteer deleted"})
          }
    })
})

router.put("/:id", (req, res, next) => {
    console.log('test44');
    console.log('Edit happened2', req.body)
    Volunteer.findByIdAndUpdate(req.params.id, { $set: req.body}, (error, data) => {
        if (error) {
            return next(error);
            // console.log(error)
          } else {
            console.log("volunteer edited", data)
            res.send({msg: "volunteer edited"})
          }
    })
})

module.exports = router;