const express = require('express') 
const cors =  require('cors')
const router = require('./routes')

require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3333)

