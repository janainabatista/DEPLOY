const knex = require('knex')({
    client:'pg',
    connection:{
         host:"bobo.db.elephantsql.com",
         port:5432,
         user:"dptcjsix",
         passoword:"XTUzEU420QQqq65ArMT2UUgBcGo7qGQs",
         database: "dptcjsix",
         ssl:{rejectUnauthorized:false}
    }
})

module.exports = knex