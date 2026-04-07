import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { validateBody } from '../middlewares/validateRequest.js';
import { loginSchema, registerSchema } from '../validators/validators.js';



const router = express.Router();

router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);



export default router