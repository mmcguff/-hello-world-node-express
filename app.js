const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 

let PORT = process.env.PORT || '3000';
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));