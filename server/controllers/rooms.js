const { selectData } = require("../db/utils/operations");

const getRooms = (req, res) => {
  const sqlQuery = `
      SELECT * FROM room r
      LEFT JOIN computer c ON c.room_id = r.id
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
  getRooms
};