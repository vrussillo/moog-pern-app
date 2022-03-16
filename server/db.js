const Pool = require("pg").Pool;

const pool = new Pool({
  user: "vaughnrussillo",
  password: "",
  host: "localhost",
  port: "5432",
  database: "moog_db",
});

module.exports = pool;
