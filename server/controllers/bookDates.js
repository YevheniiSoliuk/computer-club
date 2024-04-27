const { insertData } = require("../db/utils/operations");

const bookDate = (req, res) => {
  const { email, name, date } = req.body;
  const ONE_DAY_IN_MS = 24 * 3600 * 1000;
  const today = new Date();
  const nameRegexp = new RegExp(/^[a-z ,.'-]+$/i);
  const emailRegexp = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  if (!emailRegexp.test(email)) {
    return res.status(400).json({
      error: 'Incorrect email format',
    });
  }

  if (!nameRegexp.test(name)) {
    return res.status(400).json({
      error: 'Incorrect name format',
    });
  }

  if (today.getTime() - new Date(date).getTime() > ONE_DAY_IN_MS) {
    return res.status(403).json({
      error: 'Incorrect date',
    });
  }

  const insertQuery = `INSERT INTO bookedDate(email, name, date) VALUES(?,?,?)`;
  insertData(res, insertQuery, [email, name, date]);

  return res.sendStatus(201);
}

module.exports = {
  bookDate
};