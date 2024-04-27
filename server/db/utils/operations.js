const { db } = require('../index');

const selectData = (res, query) => {
  db.all(query, [], (error, rows) => {
    if (error) {
      return res.status(404).json({
        error: error,
      })
    }

    if (rows.length < 1) {
      return res.status(404).json({
        error: 'Table is empty',
      })
    }

    return res.status(200).json(rows);
  });
}

const insertData = (res, query, values) => {
  db.run(query, values, (error) => {
    if (error) {
      return res.status(500).json({
        error: error,
      })
    }
  })
}

module.exports = {
  selectData,
  insertData
};