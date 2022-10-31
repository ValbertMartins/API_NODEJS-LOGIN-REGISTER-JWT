const express = require('express')
const app = express()
const cors = require('cors')


//dbconnect
    const dbconnect = require('./config/dbconnect')
    dbconnect()


//midlewares 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use('/cadastro', require('./routes/cadastro'))
app.use('/login', require('./routes/login'))
app.use('/profile', require('./routes/profile'))
app.use('/refreshToken', require('./routes/refreshToken'))


app.listen(8383, () => console.log(`running in PORT 8383`))