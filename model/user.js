export default Users = [
    {
        id: 1, 
        email: 'user1@email.com',
        username: 'user1', 
        password: 'password', 
        userToken: 'token123'
    },
    {
        id: 2, 
        email: 'user2@email.com',
        username: 'user2', 
        password: 'pass1234', 
        userToken: 'token12345'
    },
    {
        id: 3, 
        email: 'testuser@email.com',
        username: 'testuser', 
        password: 'testpass', 
        userToken: 'testtoken'
    },
];
// var mongoose = require("mongoose")

// var Schema = mongoose.Schema

// var UserSchema = new Schema({
//     username: { type: String, required: true, max: 100 },
//     password: { type: String, required: true, max: 100 },
// })

// // Export model
// module.exports = mongoose.model("User", UserSchema, "users")
