// src/dynamic-schemas/dynamic-schemas.service.ts
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { EntityManager } from 'typeorm';
import { Repository } from 'typeorm';
import { Connection, getConnection } from 'typeorm';



import "reflect-metadata"
import { CustEntity } from 'src/entities/customers.entity';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class DynamicSchemasService {

    constructor(
        private readonly entityManager: EntityManager,

    ) { }

    async createTable(schemaName: string, tableName: string): Promise<void> {
        await this.entityManager.query(`
          CREATE TABLE IF NOT EXISTS "${schemaName}"."${tableName}" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL
          )
        `);
    }


    async createSchema(schemaName: any): Promise<object> {

        try {

            const schema = await this.entityManager.query(`CREATE SCHEMA tenant_${schemaName}`).then(async () => {

                const table = await this.createTable(`tenant_${schemaName.toLowerCase()}`, 'customers').then((result) => {
                    console.log("CREATED TABLE")
                })

            });

            return {message : 'Schema and Table Created'};

        } catch (error) {
            throw new Error(error);
        }
    }
}
