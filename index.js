const express = require('express');
const app = express();

const config = {
    port: 3000,
};

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});