// app.get("/users", (req, res) => {
//     res.send("Hello first request")
// })

import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js"

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Hello this is auth endpoint")
// })
// router.get("/", (req, res) => {
//     res.send("Hello this is users endpoint")
// })

// //CREATE
// router.post("/", createUser)

router.get("/checkautentication", verifyToken, (req, res, next) =>{
    res.send("Hello user, you're logged in")
})

// UPDATE
router.put("/:id", updateUser)

// DELETE
router.delete("/:id", deleteUser)

// GET
router.get("/:id", getUser)

// GET ALL
router.get("/", getUsers)

export default router;