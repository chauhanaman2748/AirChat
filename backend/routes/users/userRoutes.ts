import express from 'express';
import {getUsersForSidebar} from "../../controllers";
import { protectRoute } from '../../services';

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;