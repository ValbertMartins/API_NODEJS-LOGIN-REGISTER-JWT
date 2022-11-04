const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

//dbconnect
    const dbconnect = require('./config/dbconnect')
    dbconnect()


//midlewares 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(cookieParser())


app.use('/cadastro', require('./routes/cadastro'))
app.use('/login', require('./routes/login'))
app.use('/profile', require('./routes/profile'))
app.use('/refreshToken', require('./routes/refreshToken'))
app.use('/logout', require('./routes/logout'))




app.listen(8383, () => console.log(`running in PORT 8383`))