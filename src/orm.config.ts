import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions ={
    type : 'postgres',
    username : 'postgres',
    password : 'mehul',
    schema:'accounts',
    port : 5432,
    host : 'localhost',
    database : 'multitenant' ,
    synchronize : true,
    entities : ['dist/**/*.entity{.ts,.js}']
}

