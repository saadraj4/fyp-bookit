import express, { Router } from 'express'
const router = express.Router()
import demo from '../controllers/DemoController';

router.get('/', demo );





export default router;