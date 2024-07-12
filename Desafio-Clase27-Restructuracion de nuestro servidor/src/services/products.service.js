import ProductManager from "../dao/managers/productManagerMongo.js"

const productManager = new ProductManager()

export default class ProductServices{
    getProducts =  async (limit, page, sort, query) => {
        return await productManager.getProducts(limit, page, sort, query)
    }

    getAddProducts = async (producto) => {
        return await productManager.getAddProducts(producto)
    }

    getProductById = async (id) => {
        return await productManager.getProductById(id)
    }

    updateProduct = async (id, update) => {
        return await productManager.updateProduct(id, update)
    }

    deleteProduct = async (id) => {
        return await productManager.deleteProduct(id)
    }
}