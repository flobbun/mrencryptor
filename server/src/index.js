require('dotenv').config();
const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log(`Listening on port ${app.get('port')}`);

    //Route
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
}

main();