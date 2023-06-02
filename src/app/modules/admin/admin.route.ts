import  express  from 'express';
import adminController from './admin.controller';
const router = express.Router();

router.post('/sign-up',adminController.createAdmin);
router.post('/sign-in',adminController.loginAdmin);

export default router;