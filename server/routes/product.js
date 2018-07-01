'use strict';
import {productController} from '../controllers/index';

module.exports = (app) => {

	app.route('/products')
		.get(productController.getAll)
		.post(productController.create);
	app.route('/products/:id')
        .put(productController.update)
		.get(productController.getOne)
		.delete(productController.delete);


};
