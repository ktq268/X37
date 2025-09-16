import authRouter from './auth.router.js';
import { Router } from 'express';


const router = Router();
router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;
