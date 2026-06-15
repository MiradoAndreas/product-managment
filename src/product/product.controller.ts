import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productsService: ProductService) {}
    @Get()
    getAllProduct() {
        return this.productsService.getAllProduct()
    }

    @Post()
    createProduct(@Body(ValidationPipe) product: CreateProductDto) {
        return this.productsService.createProduct(product)
    }

    @Get(':id')
    getOneProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.getOneProduct(id)
    }
}
