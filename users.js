// var express = require("express")
// var router = express.Router()

// var User = require("./model/user")

// /* GET users listing. */
// router.get("/profile", function(req, res, next) {
//     user = req.session.user
//     if (user) res.render("profile", { title: "Profile", user: user })
//     else res.redirect("./screens/SignInScreen.js")
// })

// router.post("/profile", function(req, res, next) {
//     var user = req.session.user
//     if (!user) res.redirect("./screens/SignInScreen.js")

//     var conditions = { _id: user._id }
//     var update = {
//         username: req.body.username,
//         password: req.body.password,
//     }
//     var options = {}
//     User.update(conditions, update, options, (err, numAffected) => {
//         if (err) throw err
//         User.findById(user._id, function(err, updateduser) {
//             if (err) throw err
//             req.session.user = updateduser
//             //console.log(updateduser)
//             res.render("profile", {
//                 title: "Profile",
//                 user: updateduser,
//                 msg: "Profile updated successfully!"
//             })
//         })
//     })
// })

// module.exports = router
