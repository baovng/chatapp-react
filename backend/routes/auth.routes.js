import express from 'express';
import { signup } from '../controllers/auth.controller.js';
import { login } from '../controllers/auth.controller.js';
import { logout } from '../controllers/auth.controller.js';
const router = express.Router();

//Create route without controler

// router.get('/signup', (req, res) => {
// 	res.send('Singup Route');
// });

router.get('/signup', signup);

router.get('/login', login);

router.get('/logout', logout);

export default router;
