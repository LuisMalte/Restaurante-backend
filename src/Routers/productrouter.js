const express = require('express');
const productcontroller = require('../Controllers/productcontroller');
const router = express.Router();

router.post('/createproduct', productcontroller.createProduct);
router.get('/listproduct/:restaurantId', productcontroller.listproduct);

module.exports = router;