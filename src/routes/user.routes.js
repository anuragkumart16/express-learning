import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";


const router = Router()

router.route("/register").post(registerUser)  //jab user/register pe hit hogi post request to registerUser call hoga
router.route("/loginUser").get(loginUser)  //jab user/register pe hit hogi post request to registerUser call hoga

export default router