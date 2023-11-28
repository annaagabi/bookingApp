import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cokies.access_token;
    if(!token){
        return next(createError(401, "You are authenticated"))
    }

    jwt.verify(token, process.env.JWT, (err, user) =>{
        if(err) return next(createError(403, "Token isn't valid!"))
        req.user = user;
        next()
    })
}