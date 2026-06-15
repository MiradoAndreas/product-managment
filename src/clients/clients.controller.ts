import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './create-client.dto';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientService: ClientsService) {}

    @Get()
    getAllClient() {
        return this.clientService.getAllClient()
    }

    @Post()
    createClient(@Body(ValidationPipe) client: CreateClientDto) {
        return this.clientService.createClient(client)
    }

    @Get(':id')
    getOneClient(@Param('id', ParseIntPipe) id: number) {
        return this.clientService.getOneClient(id)
    }

    @Delete(':id')
    deleteClient(@Param('id', ParseIntPipe) id: number) {
        return this.clientService.deleteClient(id)
    }

    
}
