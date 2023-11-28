import express from "express";
import { register, login } from "../controllers/auth.js"

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Hello this is auth endpoint")
// })
// router.get("/register", (req, res) => {
//     res.send("Hello this is auth register endpoint")
// })
router.post("/register", register)
router.post("/login", login)

export default router;