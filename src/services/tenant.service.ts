import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TenantNest } from '../entities/tenant.entity';

@Injectable()
export class TenantService {

    constructor(
        
        @InjectRepository(TenantNest)
        private readonly tenantRepository: Repository<TenantNest>,
    ) { }

    async createTenant(is_active , schema_name){

        console.log(is_active ,schema_name ,"SCHEMA NAME")
        // const poll = this.tenantRepository.create({is_active ,schema_name});
        // return this.tenantRepository.save(poll);

        
    }

    async getAllTenants() {
        return this.tenantRepository.find();
    }

}