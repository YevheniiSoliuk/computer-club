const { Router } = require("express");
const { getReviews } = require("../controllers/reviews");
const { getComputers } = require("../controllers/computers");
const { bookDate } = require("../controllers/bookDates");
const { getRooms } = require("../controllers/rooms");
const { getPricesByRoomId } = require("../controllers/prices");

const router = new Router();

router.get('/reviews', getReviews);
router.get('/computers', getComputers);
router.get('/rooms', getRooms);
router.get('/prices/:roomId', getPricesByRoomId);
router.post('/book-date', bookDate);

module.exports = router;