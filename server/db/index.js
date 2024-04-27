const sqllite = require('sqlite3').verbose();

const db = new sqllite.Database('./db/computer-club.db', sqllite.OPEN_READWRITE, (error) => {
  if (error) {
    return console.error(error);
  }
});

module.exports = {
  db
};