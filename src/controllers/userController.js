import * as services from "../services/userService.js";

export async function signUp(req, res) {
        const { name, email, password } = req.body;
        
        services.signUp({
            email,
            password,
            name
        })
        res.sendStatus(201);
    }