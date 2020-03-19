const bodyParser = require('body-parser')

//app.use(bodyParser.urlencoded({extend: false}))

module.exports = (app) => {
    app.use(bodyParser.json())
}
