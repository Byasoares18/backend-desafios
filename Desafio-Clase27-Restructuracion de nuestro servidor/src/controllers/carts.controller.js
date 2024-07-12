import CartServices from "../services/cart.service.js";

const cartServices = new CartServices()

export const getCarts =  async (req, res) => {
    try{
        const carts = await cartServices.getCarts()
        res.send(carts)

    } catch (err) {
        res.status(500).send("Error al obtener los carritos" + err)
    }
}

export const getCartById = async (req, res) => {
    const id = req.params.cid
    const cart = await cartServices.getCartById(id)
    res.send(cart)

}

export const createCart = async (req, res) => {
    try {
        const cart = await cartServices.createCart()
        res.send(cart)
    } catch (err) {
        res.status(500).send("Error al crear el carrito" + err)
    }
}

export const addProductInCart = async (req, res) => {
    try{
        const cid = req.params.cid
        const pid = req.params.pid

        const product = await cartServices.addProductInCart(cid, pid)

        res.send(product)

    } catch (err) {
        res.status(500).send("Error al agregar producto al carrito" + err)
    }
}

export const updateProductInCart = async (req,res) => {
    const cid = req.params.cid
    const pid = req.params.pid
    const update = req.body.qty

    const result = await cartServices.updateProductInCart(cid, pid, update)

    res.send(result)
}

export const updateProductsInCart = async (req,res) => {
    const cid = req.params.cid
    
    const update = req.body

    const result = await cartManager.updateProductsInCart(cid, update)

    res.send(result)
}

export const deleteProductInCart = async (req, res) => {
    try{
        const cid = req.params.cid
        const pid = req.params.pid

        const product = await cartManager.deleteProductInCart(cid, pid)

        res.send(product)

    } catch (err) {
        res.status(500).send("Error al agregar producto al carrito" + err)
    }
}

export const deleteAllProducts = async (req, res) => {
    const id = req.params.cid
    const cart = await cartManager.deleteAllProducts(id)
    res.send(cart)

}