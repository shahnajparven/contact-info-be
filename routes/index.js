import { Router } from 'express';
import { contactRoutes } from './contactRoutes.js';


const router = Router();

// routes

router.use('/',contactRoutes);

export default router;
