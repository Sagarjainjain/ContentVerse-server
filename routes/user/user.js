import express from "express";
const router = express.Router();

import {  login } from "../../controllers/user/user.js"


router.post("/", login);


export default router;