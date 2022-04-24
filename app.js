const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/user', require('./routes/api/user'))

app.listen(3000,() =>{
    console.log('app listening at port 3000')
})
    