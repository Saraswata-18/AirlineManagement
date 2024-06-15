const express =require ("express");
const router=express.Router();
const{addStaff,logStaff,managerCheck,getData}=require("../controllers/companyController");
router.route('/add').post(addStaff)
router.route('/log').post(logStaff)
router.route('/manager/check').post(managerCheck)
router.route('/getdata').post(getData)
module.exports=router;