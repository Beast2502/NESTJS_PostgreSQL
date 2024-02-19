import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './models/user.module';
import { DynamicSchemasModule } from './models/dynamic-schemas.module';
import {CustModule} from './models/cust.module'





import { config } from './db/orm.config';

@Module({
  imports: [AuthModule, 
    UserModule,
    DynamicSchemasModule,
    CustModule,
    TypeOrmModule.forRoot(config),
  ],


  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
