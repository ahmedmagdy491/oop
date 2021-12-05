const {
	add,
	get,
	getOne,
	deleteOne,
	update,
} = require('../controllers/users.controller');
const instance = require('../middlewares/users.middleware');

const router = require('express').Router();
router.use(instance);
router.route('/').post(add).get(get);
router.route('/:id').get(getOne).delete(deleteOne).put(update);
module.exports = router;
