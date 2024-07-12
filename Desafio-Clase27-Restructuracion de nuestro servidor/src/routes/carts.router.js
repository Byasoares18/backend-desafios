import { Router } from "express";
import { getCartById, getCarts, createCart, addProductInCart, deleteAllProducts, deleteProductInCart, updateProductInCart, updateProductsInCart } from "../controllers/carts.controller.js";


const router = Router()


router.get('/', getCarts)

router.get('/:cid', getCartById)

router.post('/', createCart)

router.post('/:cid/product/:pid', addProductInCart)

router.put('/:cid/product/:pid', updateProductInCart)

router.put('/:cid', updateProductsInCart)

router.delete('/:cid/product/:pid', deleteProductInCart)

router.delete('/:cid', deleteAllProducts)



export default router