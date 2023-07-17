// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = require('express').Router();

const {
  createUser, getUsers, getUserById, updateUser, updateUserAvatar,
// eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../controllers/users');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;