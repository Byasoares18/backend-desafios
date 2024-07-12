import  CartManager  from "../dao/managers/cartManagerMongo.js";

const cartManager = new CartManager()

export default class CartServices{

    createCart = async () => {
        return await cartManager.createCart()
    }

    getCarts = async () => {
        return await cartManager.getCarts()
    }

    getCartById = async (cid) => {
        return await cartManager.getCartById(cid)
    }

    addProductInCart = async (cid, pid) => {
        return await cartManager.addProductInCart(cid,pid)
    }

    deleteProductInCart = async (cid, pid) => {
        return await cartManager.deleteProductInCart(cid, pid)
    }

    deleteAllProducts = async (cid) => {
        return await cartManager.deleteAllProducts(cid)
    }

    updateProductInCart = async(cid, pid, update) => {
        return await cartManager.updateProductInCart(cid, pid, update)
    }

    updateProductsInCart = async (cid, update) => {
        return await cartManager.updateProductsInCart(cid, update)
    }
}