const { selectData } = require("../db/utils/operations");

const getComputers = (req, res) => {
  const sqlQuery = `
      SELECT * FROM computer c
      LEFT JOIN room r ON c.room_id = r.id
    `;

  try {
    selectData(res, sqlQuery);
  } catch(error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

module.exports = {
  getComputers
};