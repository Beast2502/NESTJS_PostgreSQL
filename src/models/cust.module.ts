// src/dynamic-schemas/dynamic-schemas.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustService } from '../services/cust.service';
import { CustEntity } from 'src/entities/customers.entity';
import { CustController } from 'src/controller/cust.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [CustService],
  exports: [CustService],
  controllers:[CustController]
  
})


export class CustModule { }
