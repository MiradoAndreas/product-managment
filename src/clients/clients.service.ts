import { Injectable, NotFoundException } from '@nestjs/common';
import { desc, eq } from 'drizzle-orm';
import { db } from 'src';
import { clientTable } from 'src/db/schema';
import { CreateClientDto } from './create-client.dto';

@Injectable()
export class ClientsService {
    async getAllClient() {
        const allClients = await db.select().from(clientTable).orderBy(desc(clientTable.createdAt))
        return allClients
    }

    async getOneClient(id: number) {
        const [client] = await db.select().from(clientTable).where(eq(clientTable.id, id))
        if(!client) {
            throw new NotFoundException(
                `Client ${id} not found`
            )
        }
        
        return client
    }

    async createClient(createClientDto: CreateClientDto) {
        const [client] = await db.insert(clientTable).values(createClientDto).returning()

        if(!client) {
            throw new NotFoundException(
                "Impossible de créer le client"
            )
        }

        return client
    }

    async deleteClient(id: number) {
        this.getOneClient(id)
        const [deleted] = await db.delete(clientTable).where(eq(clientTable.id, id)).returning()

         if(!deleted) {
            throw new NotFoundException(
                "Impossible d'effacer le client"
            )
        }

        return deleted
    }
}
