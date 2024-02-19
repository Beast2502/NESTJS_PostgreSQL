import { TypeOrmModuleOptions } from '@nestjs/typeorm';


import {Connection} from 'typeorm'



import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';




export class TenantSchema {

    constructor() {

    }

    createSchema(schema_name) {

        console.log('SCHEMA IS CREATED', schema_name)

        const schemaConfig: TypeOrmModuleOptions = {
            type: 'postgres',
            username: 'postgres',
            password: 'mehul',
            schema: schema_name,
            port: 5432,
            host: 'localhost',
            database: 'multitenant',
            synchronize: true,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        }

        const result = TypeOrmModule.forRoot(schemaConfig);

        console.log(result,"SCHEMA CREATED")
          

    }
    
}