import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { DynamicSchemasService } from './dynamic-schemas.service';




@Injectable()
export class UserService {
    constructor(


        @InjectRepository(UserEntity)
        private readonly pollRepository: Repository<UserEntity>,

        private readonly dynamicSchemasService: DynamicSchemasService,

    ) { }

    async createUser(email, password, is_active, full_name, schema_name) {

        console.log(email, password, is_active, full_name, schema_name, "SCHEMA NAME")


        const schema = await this.dynamicSchemasService.createSchema(schema_name);


        // return schema;


        const poll = this.pollRepository.create({
            email: email,
            password: password,
            is_active: is_active,
            full_name: full_name,
            schema_name: `tenant_${schema_name}`
        });
        return this.pollRepository.save(poll);




    }


    async getAllUsers(): Promise<UserEntity[]> {
        return this.pollRepository.find();
    }

}