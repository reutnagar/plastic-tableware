const express      = require('express'),
	router           = express.Router(),
	mainController   = require('./controllers/main.controller'),

	userController = require('./controllers/user.controller'),

	categoryController = require('./controllers/category.controller'),

	itemsController = require('./controllers/item.controller'),
	paymentController = require('./controllers/payment.controller');

 
  
var path = require('path');

router.use(express.static(path.join(__dirname , '../public/view/client')));
router.use(express.static(path.join(__dirname , '../public/view/admin')));


router.get('/admin/showAllItems', itemsController.showAllItems);
router.get('/admin', function(req,res){
    res.sendFile(path.join(__dirname , '../public/view/admin/index.html'));
});
router.post('/admin/addItem', itemsController.addItem);
router.post('/admin/deleteItem', itemsController.deleteItem);
router.post('/admin/countItem', itemsController.countItem);
router.post('/admin/changeItem', itemsController.changeItem);

router.post('/admin/signIn',userController.signIn);
router.post('/admin/signOut',userController.signOut);
router.post('/admin/getSessionInfo',userController.getSessionInfo);

router.get('/showAllCategories', categoryController.showAllCategories);
router.post('/showAllSubCategory', categoryController.showAllSubCategories);
router.post('/processPayment', paymentController.processPayment);
router.post('/getProductDetails', itemsController.getProductDetails);
router.post('/getProductsOfSubCategory',itemsController.getProductsOfSubCategory);
// export router
module.exports = router;

