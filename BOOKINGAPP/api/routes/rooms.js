import express from "express";

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Hello this is auth endpoint")
// })
router.get("/", (req, res) => {
    res.send("Hello this is rooms endpoint")
})

export default router;