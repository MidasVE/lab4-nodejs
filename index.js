const express = require('express');
const app = express();

const config = {
    port: process.env.PORT || 3000,
};

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

require('./routes/')(app);

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});