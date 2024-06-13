import { Router } from 'express';
import { getProducts, productId, createProduct, updateProduct, deletProduct } from '../controllers/products_controllers.js';
import { uploader } from '../utils/multer.js';

const router = Router();

//-------------------------------------------------------------------

router.get('/', getProducts);

//-------------------------------------------------------------------

router.get('/:pid', productId);

//-------------------------------------------------------------------
router.post('/', uploader.array('thumbnails', 3), createProduct);

//---------------------------------------------------------------------

router.put("/:pid", uploader.array('thumbnails', 3), updateProduct );

//---------------------------------------------------------------------

router.delete("/:pid", deletProduct )

export default router