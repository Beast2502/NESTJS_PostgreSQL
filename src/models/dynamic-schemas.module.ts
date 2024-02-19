// src/dynamic-schemas/dynamic-schemas.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicSchemasService } from '../services/dynamic-schemas.service';
import { CustEntity } from 'src/entities/customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustEntity])],
  providers: [DynamicSchemasService],
  exports: [DynamicSchemasService],
  
})


export class DynamicSchemasModule { }
