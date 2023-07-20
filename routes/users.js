import {Router as expressRouter} from "express";
const router = expressRouter();

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserAvatar,
} from '../controllers/users';

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;