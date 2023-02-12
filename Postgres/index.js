const pg = require("pg")

const client = new pg.Client({ // pozor na importování modulu pg
    host: '38.242.243.239',
    port: 5433,
    user: 'nguyen_duc_minh',
    password: 'T133WKWT5ZLZFFC',
    database: 'nguyen_duc_minh_db'
})

async function start() {

    await client.connect()
    const result = await client.query('SELECT * FROM user;');

    const users = result.rows;

    // např.
    console.log(users[1]); // a další sloupce
    console.log("pog")
}
start()

