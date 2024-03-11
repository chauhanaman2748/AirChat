import express from 'express';
import {SignUpUser, LogInUser, LogOutUser} from "../controllers";

const router = express.Router();

router.get("/signup", SignUpUser);

router.get("/login", LogInUser);

router.get("/logout", LogOutUser);

export default router;