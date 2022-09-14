const app = require('./app');
const mongoose = require('mongoose');
const port = 3000

//connecting to database!

mongoose.connect('mongodb://localhost/mario', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));

