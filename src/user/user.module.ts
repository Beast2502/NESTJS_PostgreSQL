import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.enitiy';

@Module({

    imports: [
        TypeOrmModule.forRoot({

            type: 'postgres',
            username: 'postgres',
            schema:'accounts',
            password: 'mehul',
            port: 5432,
            host: 'localhost',
            database: 'multitenant',
            entities: [User],
            synchronize: true
        }),
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UserController],
    providers: [UserService]

})
export class UserModule { }



