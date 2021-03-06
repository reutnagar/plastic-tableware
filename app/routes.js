const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller'),
    userController = require('./controllers/user.controller'),
    categoryController = require('./controllers/category.controller'),
    itemsController = require('./controllers/item.controller'),
    ordersController = require('./controllers/order.controller'),
    paymentController = require('./controllers/payment.controller'),
    emailController = require('./controllers/email.controller');
addToCartController = require('./controllers/addToCart.controller');

var path = require('path');
router.use(express.static(path.join(__dirname, '../public/view/client')));
router.use(express.static(path.join(__dirname, '../public/view/admin')));


router.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/view/admin/index.html'));
});

//itemsController
router.get('/admin/showAllItems', itemsController.showAllItems);
router.get('/admin/checkQuantity', itemsController.checkQuantity);
router.post('/admin/addItem', itemsController.addItem);
router.post('/admin/getQuantities', itemsController.getQuantities);
router.post('/admin/deleteItem', itemsController.deleteItem);
router.post('/admin/deleteItemById', itemsController.deleteItemById);
router.post('/admin/countItem', itemsController.countItem);
router.post('/admin/changeItem', itemsController.changeItem);
router.post('/getProductDetails', itemsController.getProductDetails);
router.post('/getProductsOfSubCategory', itemsController.getProductsOfSubCategory);
router.post('/checkIfItemExistsInStock', itemsController.checkIfItemExistsInStock);

//ordersControllers
router.get('/admin/showAllOrders', ordersController.showAllOrders);
router.get('/admin/showLastOrders', ordersController.showLastOrders);
router.post('/ordersOfUserName', ordersController.ordersOfUserName);

//userController
router.post('/admin/signIn', userController.signIn);
router.post('/admin/signOut', userController.signOut);
router.get('/admin/getSessionInfo', userController.getSessionInfo);

//categoryController
router.get('/showAllCategories', categoryController.showAllCategories);
router.post('/showAllSubCategory', categoryController.showAllSubCategories);

//paymentController
router.post('/processPayment', paymentController.processPayment);

router.post('/sendEmailserver', emailController.sendEmailserver);

//addToCartController
router.post('/makeAnOrder', addToCartController.makeAnOrder);
router.post('/quantity', addToCartController.quantity);


// export router
module.exports = router;