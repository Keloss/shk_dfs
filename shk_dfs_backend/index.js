require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const searchFiles = require('./directory')
const path = require('path');
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlerMiddleWare')

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server is started on port: ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

var pul = 'Application'
const cur = path.resolve(__dirname, '../../../..')
console.log(cur+ '\\Desktop\\практика')
const Path = path.join(require('os').homedir(), `Desktop\\практика\\${pul}`);

searchFiles(Path, (files) => {
    console.log(`Содержимое папки ${Path}`, files);
});


start();