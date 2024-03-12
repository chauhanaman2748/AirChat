import express from 'express';
import { sendMessage, getMessages } from '../../controllers';
import { protectRoute } from '../../services';

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;