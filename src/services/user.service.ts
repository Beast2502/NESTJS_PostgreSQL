import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.enitiy';
import { TenantService } from './tenant.service';
import { TenantNest } from 'src/entities/tenant.entity';



@Injectable()
export class UserService {
    constructor(

        @InjectRepository(UserEntity)
        private readonly pollRepository: Repository<UserEntity>,

    ) { }

    async createUser(email, password , is_active , full_name ,schema_name){

        console.log(email, password , is_active , full_name ,schema_name ,"SCHEMA NAME")
        // const poll = this.pollRepository.create({ email, password , is_active , full_name });
        // return this.pollRepository.save(poll);

      
       
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return this.pollRepository.find();
    }

}