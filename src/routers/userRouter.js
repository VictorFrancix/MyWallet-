import { Router } from "express";
import { signUp } from "../controllers/userController.js";
import { validateSchema } from "../middlewares/schemaMiddleware.js";
import { signUpSchema, loginSchema } from "../schemas/userSchema.js"


const userRouter = Router();

userRouter.post("/sign-up",validateSchema(signUpSchema), signUp );
userRouter.post("/sign-in", validateSchema(loginSchema), )

export default userRouter;
