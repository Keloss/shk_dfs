require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const searchFiles = require('./directory')
const path = require('path');

const PORT = process.env.PORT || 5000

const app = express();

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

var pul = ''

const Path = path.join(require('os').homedir(), `Desktop\\практика\\${pul}`);

searchFiles(Path, (files) => {
    console.log('Содержимое папки рабочего стола:', files);
});

const cur = path.resolve(__dirname, '../../../..')

// console.log("основной каталог сейчас: " + cur)

// console.log(cur+ '\\Desktop\\практика')



start();