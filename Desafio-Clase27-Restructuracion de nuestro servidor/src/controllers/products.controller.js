import ProductServices from "../services/products.service.js";
import { socketServer } from "../app.js";


const productServices = new ProductServices()

export const getProducts = async (req,res) =>{
    try{
        const limit = req.query?.limit ?? 10
        const page = req.query?.page ?? 1
        const sort = req.query?.sort ?? "asc"
        const products = await productServices.getProducts(limit, page, sort)
        res.send(products)

    } catch (err) {
        res.status(500).send("Error al obtener los productos" + err)
    }
}

export const getProductById = async (req,res) => {
    try{
        const id = req.params.id
        const producto = await productServices.getProductById(id)
        res.send(producto)
    } catch (err) {
        res.status(500).send("Error al obtener el producto: " + err)
    }
}

export const getAddProducts =  async (req, res) => {
    try{

        if(!req.file){
            res.status(500).send("No subiste la imagen")
        }

        const data = req.body
        const filename = req.file.filename

        data.thumbnail = `http://localhost:8080/static/images/${filename}`

        const producto = await productServices.getAddProducts(data)
        const productos = await productServices.getProducts()
        socketServer.emit('newProduct', productos)
        res.json(producto)
    } catch (err) {
        res.status(500).send("Error al cargar el producto: " + err)
    }

}

export const updateProduct = async (req, res) => {
    try{
        const id = req.params.id
        const data = req.body

        if(req.file){
            const filename = req.file.filename
            data.thumbnail = `http://localhost:8080/images/${filename}`
        }

        const producto = await productManager.updateProduct(id, data)

        res.send(producto)
    } catch (err) {
        res.status(500).send("Error al querer upgradear el producto: " + err)
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id

        const productEliminated = await productManager.deleteProduct(id)
        socketServer.emit('deleteProduct', productEliminated.res)
        res.json(productEliminated)
    } catch (err) {
        res.status(500).send("Error al querer eliminar el producto: " + err)
    }
}