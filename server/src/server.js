//@flow
import express from 'express'
import bodyParser from 'body-parser'

let server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

let port = process.env.PORT || 8000

let router = express.Router()

router.get('/', (req, res) => { res.json({message: 'Server Response OK'})})

server.use('/api', router)

server.listen(port)
