/**
 * All routes are place here.
 */
const path = require('path')
const controllerPath = path.join(__dirname, 'controllers')
const pagesController = require(path.join(controllerPath, 'pages'))

module.exports = function(app) {
    app.get('/', pagesController.index)
    app.get('/pug', pagesController.pug)
    console.log("coffee addict");
}
