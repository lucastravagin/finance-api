module.exports = {
    test: {
        client: 'mysql',
        connection: {
            host: "localhost",
            user: "root",
            password: "bC#7ecN0",
            database: 'finance'
        },
        migrations: {
            directory: 'src/migrations'
        }
    }
}
