import  express  from 'express';
import adminController from './admin.controller';
const router = express.Router();

router.post('/sign-up',adminController.createAdmin);
router.post('/sign-in',adminController.loginAdmin);
router.get('/all-admin',adminController.getAllAdmin);

export default router;