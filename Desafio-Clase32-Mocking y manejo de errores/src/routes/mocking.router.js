import { Router } from "express";
import { getMockingProducts } from "../controllers/products.controller.js";

const router = Router()

router.get('/mockingproducts', getMockingProducts)

export default router