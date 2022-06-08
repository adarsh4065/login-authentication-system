const { request } = require('express')
const express = require('express')
let mongoose = require("mongoose")
let bodyParser = require('body-parser')
let cors = require('cors')
const app = express()
const port = 5000
app.use(cors())
mongoose.Promise = global.Promise;
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect("mongodb://localhost:27017/mydb");

let nameSchema = new mongoose.Schema({
    Name: String,
    username: String,
    password: String
})
let user = mongoose.model("user", nameSchema);

user.findOne((err,res)=>{
    if(err) console.log(err)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post("/api/req", urlencodedParser, (req, res) => {
    console.log(req.body);
})

app.get('/api', (req, res) => {
    res.json({ message: "backend running " })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
app.post("/api/req", urlencodedParser, (req, res) => {
    const data = new user({
        Name: req.name,
        username: req.username,
        password: req.password,
      });
    data.save((err, result)=>{
        if(err) console.log(err);
        else res.sendJson({"info" : "data saved"});
    })
    
   });