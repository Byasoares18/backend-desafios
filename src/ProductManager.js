
import fs from 'fs';

class ProductManager {
    constructor(filePath) {
    this.path = filePath;
}

    async getProducts(limit) {
        const products = await this.readProductsFromFile();
    return limit ? products.slice(0, limit) : products;
}

    async getProductById(id) {
        const products = await this.readProductsFromFile();
        const product = products.find(p => p.id === id);

    if (!product) {
        throw new Error('Producto no encontrado');
    }

    return product;
}

    async readProductsFromFile() {
    try {
        const products = await fs.promises.readFile(this.path, 'utf-8');
    return JSON.parse(products);
    } catch (error) {
    if (error.code === 'ENOENT' || error.message === 'Unexpected end of JSON input') {
        return [];
    } else if (error instanceof SyntaxError) {
        console.error('JSON inválido en el archivo:', this.path);
        return [];
    } else {
        throw new Error('Error al leer el archivo de productos: ' + error.message);
    }
    }
}
}

export default ProductManager;
