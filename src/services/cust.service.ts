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
export class CustService {

    constructor(
        private readonly entityManager: EntityManager,

    ) { }

    async getCust(schemaName: string, tableName: string): Promise<void> {
        // await this.entityManager.query(`
        //   CREATE TABLE IF NOT EXISTS "${schemaName}"."${tableName}" (
        //     id SERIAL PRIMARY KEY,
        //     name VARCHAR(255) NOT NULL
        //   )
        // `);
    }


    async createCust(schemaName: any , name : any) {

        try {

            console.log(`tenant_${schemaName.toLowerCase()}`)

            const schema = await this.entityManager.query(`
            INSERT INTO "tenant_${schemaName.toLowerCase()}"."customers"(
                name)
                VALUES ('${name}')
            `
            
            ).then(async () => {

             console.log("DATA INSERTED ")

            });

            return {message : 'Schema and Table Created'};

        } catch (error) {
            throw new Error(error);
        }

        // console.log(schemaName,"TEST CUST REQUEST")
    }
}
