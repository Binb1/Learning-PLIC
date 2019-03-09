const Pool = require('pg').Pool
const pool = new Pool({
  user: 'robin',
  host: 'localhost',
  database: 'test_db_node',
  password: 'robin',
  port: 5432,
})

const getUsers = (req, res) => {
    pool.query(
        'SELECT * FROM user_test',
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        }
    )
}


module.exports = {
    getUsers
}