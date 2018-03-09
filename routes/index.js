const glob = require('glob');
const path = require('path');

module.exports = (app) => {
    app.get('/kweeni', (req, res) => {
        res.render('index');
    });

    glob.sync('./routes/!(index).js', {
        absolute: true,
    }).forEach(route => {
        require(route)(app);
    })
};