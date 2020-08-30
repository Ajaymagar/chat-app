const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const {v4: uuidv4 } = require('uuid');
app.use(express.static('Public'))


app.set('view engine', 'ejs' )

app.get('/', (req , res) =>{
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room', (req , res)  =>{
    res.render('room' , {roomid : req.params.room })
})


io.on('connection',socket =>{
    socket.on('join-room',() => {
        console.log('joined Room')
    } )
} )













PORT = process.env.PORT || 5000
http.listen(PORT,()=>{
    console.log(`server hosted on ${PORT} `)
})

