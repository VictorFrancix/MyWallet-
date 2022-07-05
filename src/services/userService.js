import * as auth from "../repository/userRepository.js";
import bcrypt from "bcrypt";

async function signUp({email,password,name}){

    const existingUsers = auth.checkUser(email);
    
    if (existingUsers.rowCount > 0) {
        throw {
            type: 409,
            message: "user already exists"
        };
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    auth.insertUser(name,email,hashedPassword)
}


export {
    signUp
}