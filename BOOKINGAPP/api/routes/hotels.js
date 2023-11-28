import express from "express";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Hello this is auth endpoint")
// })
// router.get("/", (req, res) => {
//     res.send("Hello this is hotels endpoint")
// })

//CREATE
router.post("/", createHotel)

// UPDATE
router.put("/:id", updateHotel)

// DELETE
router.delete("/:id", deleteHotel)

// GET
router.get("/:id", getHotel)

// GET ALL
router.get("/", getHotels)

export default router;