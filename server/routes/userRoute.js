import express from 'express';
import { homeRoute } from '../controllers/userController.js';

//Create an express router
const router = express.Router();

// Define a route for tha paths that maps to controllers.
router.get("/", homeRoute);




export default router;