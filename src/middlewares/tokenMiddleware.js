import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()

export const validateToken = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) return res.status(401).send({ error: "No token provided" });
        token = token.replace("Bearer ", "");
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).send({ error: "Invalid token" });
        res.locals.user = decoded;
        
        next();
    } catch (err) {
        return res.status(401).send({message: "Auth failed" });
    }
}
