import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.enitiy';

@Module({

    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [UserController],
    providers: [UserService]

})
export class UserModule { }



