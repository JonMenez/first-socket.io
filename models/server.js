const express = require('express')
const cors = require('cors')

const socketController = require('../controllers/socket.controller')


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server)

        this.paths = {}

        //Middlewares
        this.middlewares()

        //Routes's App
        this.routes()

        //Socket
        this.socket()
    }

    middlewares() {

        //CORS
        this.app.use(cors())

        //public directory
        this.app.use(express.static('public'))
    }

    socket() {
        this.io.on('connection', socketController)
    }

    routes() { }

    listen() {
        this.server.listen(this.port, () => {
            console.log('server connected, port:', this.port)
        })
    }
}

module.exports = Server