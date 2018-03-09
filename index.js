const express = require('express');
const app = express();

const config = {
    port: process.env.PORT || 3000,
};

require('./routes/')(app);

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});