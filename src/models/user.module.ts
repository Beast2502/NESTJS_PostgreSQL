import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { DynamicSchemasService } from 'src/services/dynamic-schemas.service';

@Module({

    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    
    ],
    controllers: [UserController],
    providers: [UserService ,DynamicSchemasService ]

})
export class UserModule { }



