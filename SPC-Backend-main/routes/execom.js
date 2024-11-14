
const express = require('express');

const { sendMail } = require('../controllers/mail');
const { login, getDrives } = require('../controllers/execom');
const { changePassword, logout } = require('../controllers/user');
const authenticateExecom = require('../middlewares/authentication')('execom');
const { getQueries, postAnswer, deleteQuery } = require('../controllers/forum');
const { postBillDetails, getBillDetails, deleteBill } = require('../controllers/bill');

const router = express.Router();

router.get('/', () => {});
router.get('/drive-details', authenticateExecom, getDrives);
router.get('/forum/queries', authenticateExecom, getQueries);
router.get('/bill-details', authenticateExecom, getBillDetails);

router.post('/login', login);
router.post('/logout', authenticateExecom, logout);
router.post('/send-email', authenticateExecom, sendMail);
router.post('/forum/answer', authenticateExecom, postAnswer);
router.post('/bill-details', authenticateExecom, postBillDetails);
router.post('/change-password', authenticateExecom, changePassword);

router.delete('/bill/:id', authenticateExecom, deleteBill);
router.delete('/forum/queries/:id', authenticateExecom, deleteQuery);

module.exports = router;
