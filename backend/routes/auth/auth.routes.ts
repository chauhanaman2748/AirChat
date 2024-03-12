import express from 'express';
import {SignUpUser, LogInUser, LogOutUser} from "../../controllers";

const router = express.Router();

router.post("/signup", SignUpUser);

router.post("/login", LogInUser);

router.get("/logout", LogOutUser);

export default router;