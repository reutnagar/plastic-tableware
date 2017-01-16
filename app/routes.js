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

// router.post('/signIn',userController.signIn);
// router.post('/signOut',userController.signOut);
// router.post('/getSessionInfo',userController.getSessionInfo);


router.get('/showAllCategories', categoryController.showAllCategories);
router.post('/showAllSubCategories', categoryController.showAllSubCategories);
router.post('/processPayment', paymentController.processPayment);
// export router
module.exports = router;

// main routes
/*
router.get('/client', mainController.showHome);
router.get('/admin', itemsController.showAllItems);
router.get('/checkQuantity', itemsController.checkQuantity);
router.get('/deleteItem', itemsController.deleteItem);
router.get('/deleteAllItems', itemsController.deleteAllItems);
router.get('/addItem', itemsController.addItem);
router.get('/a', itemsController.a);

*/
 /* // main routes
router.get('/client', mainController.showHome);
router.get('/admin', itemsController.showAllItems);
router.get('/addItem', itemsController.addItem);
router.get('/checkQuantity', itemsController.checkQuantity);
router.get('/deleteItem', itemsController.deleteItem);
router.get('/deleteAllItem', itemsController.deleteAllItem);

router.use('/userManage',require('./Controllers/userServerController'));----------



/*router.get('*', function(req,res){
    res.sendFile(path.join(__dirname , '../public','view/admin/index.html'));
});*/

//router.get('/createItem',itemsController.createItem);
//router.get('/getAllItems',itemsController.getAllItems);
