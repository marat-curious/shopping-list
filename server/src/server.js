//@flow
import express from 'express'
import bodyParser from 'body-parser'
import router from './routes'
import db from './db'

let server = express()
let port = process.env.PORT || 8000

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use('/api', router)

server.listen(port)
