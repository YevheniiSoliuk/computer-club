const { selectData } = require("../db/utils/operations");

const getReviews = (req, res) => {
  const sqlQuery = `
      SELECT * FROM review
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
  getReviews
};