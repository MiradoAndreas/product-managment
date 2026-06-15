import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';

import { productTable } from 'src/db/schema';
import { CreateProductDto } from './dto/create-product.dto';
import { db } from 'src/index';


@Injectable()
export class ProductService {

    
    async getAllProduct() {
        const allProduct = await db.select().from(productTable)
        return allProduct
    }

    async getOneProduct(id: number) {
        const [product] = await db.select().from(productTable).where(eq(productTable.id, id))

        if(!product) {
            throw new NotFoundException(
                `Product ${id} not found`
            )
        }

        return product
    }

    async createProduct(createProductDto: CreateProductDto) {
        const [product] = await db.insert(productTable).values(createProductDto).returning()

        if(!product) {
            throw new NotFoundException(
                "Impossible de créer le produit"
            )
        }
        return product
    }
}
