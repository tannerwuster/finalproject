// var express = require("express")
// var router = express.Router()
// // https://express-validator.github.io/docs/
// const { check, validationResult } = require("express-validator/check")
// const { sanitizeBody } = require("express-validator/filter")

// var User = require("../models/user")

// /* GET home page. */
// router.get("/", function(req, res, next) {
//     res.render("index", { title: "A Todo List App" })
// })

// router.get("/screens/SignInScreen.js", function(req, res, next) {
//     res.render("login", { title: "Log In" })
// })

// router.post("/screens/SignInScreen.js", function(req, res, next) {
//     let username = req.body.username
//     let password = req.body.password
//     // mongoose query projection; include all attributes but password
//     // https://mongoosejs.com/docs/api.html#query_Query-projection
//     User.findOne({ username: username, password: password }, '-password', function(err, user) {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//         console.log(user)
//         if (!user) {
//             let context = {
//                 title: "Log in",
//                 error: "Invalid username and/or password"
//             }
//             res.render("login", context)
//         } else {
//             // add logged in user to session
//             req.session.user = user
//             res.redirect("/screens/HomeScreen.js")
//         }
//     })
// })

// router.get("/screens/SignUpScreen.js", function(req, res, next) {
//     res.render("signup", { title: "Sign up" })
// })

// router.post(
//     "/screens/SignUpScreen.js",
//     [
//         // Validate fields.
//         check("username", "Username must not be empty.")
//             .isLength({ min: 1 })
//             .trim(),
//         // email must be valid
//         // check("email", "Not a valid email.")
//         //     .isEmail()
//         //     .trim(),
//         check("password", "Password must be at least 5 chars long")
//             .isLength({ min: 5 })
//             .trim(),
//         check("password1", "Two passwords do not match")
//             .exists()
//             .custom((value, { req }) => value === req.body.password),
//         // Sanitize fields.
//         sanitizeBody("*")
//             .trim()
//             .escape()
//     ],
//     function(req, res, next) {
//         // extract the validation errors from a request
//         const errors = validationResult(req)
//         // check if there are errors
//         if (!errors.isEmpty()) {
//             let context = {
//                 title: "Sign up",
//                 errors: errors.array()
//             }
//             res.render("signup", context)
//         } else {
//             // create a user document and insert into mongodb collection
//             let user = new User({
//                 email: req.body.email,
//                 password: req.body.password
//             })
//             console.log(user)
//             user.save(err => {
//                 if (err) {
//                     return next(err)
//                 }
//                 // successful - redirect to login page
//                 res.render("login")
//             })
//         }
//     }
// )

// // authenticated page; check if session exists
// router.get("/dashboard", (req, res, next) => {
//     var user = req.session.user
//     if (user)
//         res.render("dashboard", { title: "All Students Grades", user: user })
//     else res.redirect("/login")
// })

// router.get("/logout", (req, res, next) => {
//     var user = req.session.user
//     if (user) {
//         req.session.destroy(function () {
//             console.log(`user: ${user.email} logged out...`)
//         })
//     }
//     res.redirect("/login")
// })

// module.exports = router