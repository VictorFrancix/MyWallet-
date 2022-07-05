import { auth } from "../repository/authRepository.js";

export async function signUp(req, res) {
    try {
        const { name, email, password } = req.body;
    
    
        const existingUsers = auth.checkUser(email);
    
        if (existingUsers.rowCount > 0) {
            return res.sendStatus(409);
        }
    
        const hashedPassword = bcrypt.hashSync(password, 12);
    
        auth.insertUser(name,email,hashedPassword)
    
        res.sendStatus(201);
        } catch (err) {
        console.error(err);
        res.sendStatus(500);
        }
    }