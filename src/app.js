import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();

const productManager = new ProductManager('./products.json');


app.get('/', (req, res) => res.json('Mi tienda'));

app.get('/products', async (req, res) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
        const products = await productManager.getProducts(limit);
        res.json({ products });
        } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/products/:pid', async (req, res) => {
  try {
    const productId = parseInt(req.params.pid);
    const product = await productManager.getProductById(productId);
    res.json({ product });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.listen(8080)
