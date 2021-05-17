const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./users')
app.use(bodyParser.json())

const User = mongoose.model("User")
// password = Coco2020
const mongoURL = `mongodb+srv://tannerwu:Coco2020@cluster0.tqd3v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
app.get('/',(req,res) => {
    res.send("Welcome to node js")
})

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

mongoose.connection.on("connected",() =>{
    console.log("connected to mongo")
})

mongoose.connection.on("error",(error) =>{
    console.log("error",error)
})

app.post('/send-data', (req,res)=>{
    const user = new User({
        username:req.body.username,
        password:req.body.password,
    })
    user.save()
    .then(data=>{
    console.log(data)
    }).catch(error=>{
    console.log("error",error)
    })
    res.send("posted")
})

app.listen(3000,() => {
    console.log("server is running")
})
