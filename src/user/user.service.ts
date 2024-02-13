import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.enitiy';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly pollRepository: Repository<User>,
    ) { }

    async createPoll(question: string, options: string[]){
        const poll = this.pollRepository.create({ question, options });
        return this.pollRepository.save(poll);

        
    }

    async getAllPolls(): Promise<User[]> {
        return this.pollRepository.find();
    }

}