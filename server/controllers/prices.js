const { selectData } = require("../db/utils/operations");

const getPricesByRoomId = (req, res) => {
  const roomId = req.params.roomId;
  const sqlQuery = `
    SELECT * FROM price
    WHERE room_id = ${roomId}
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
  getPricesByRoomId
};