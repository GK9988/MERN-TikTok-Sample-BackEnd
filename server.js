require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Videos = require('./dbModel.js')

// App config

const app = express()
const port = process.env.PORT || 9000

// Middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

// DB Config
const dbConnectionUrl = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.02qx5.mongodb.net/tiktok?retryWrites=true&w=majority`

mongoose.connect(dbConnectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

})

// API Endpoints

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.get('/v1/posts' ,(req, res) => {
    res.status(200).send(Data)
})

app.get('/v2/posts', (req, res)=>{
    Videos.find({}, (err,data) =>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

// Listener

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})