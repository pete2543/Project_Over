const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.get("/",(req,res)=>{
    res.send("Hello Word");
});
app.listen(5000, () => console.log('Server Started'))