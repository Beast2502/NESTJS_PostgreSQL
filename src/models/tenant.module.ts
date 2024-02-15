
import { Module } from '@nestjs/common';
import { TenantService } from '../services/tenant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantNest } from '../entities/tenant.entity';

@Module({

    imports: [

        TypeOrmModule.forFeature([TenantNest]),
    ],
    controllers: [],
    providers: [TenantService]

})
export class TenantModule { }



