import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { Body, Controller, Get, Param, Post, Req, } from "@nestjs/common";
import { UserService } from "../services/user.service";


@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }


    @Get('')
    async findAllUsers(@Req() request: Request) {
        console.log(request.headers['x-tenant_id'], 'REQUEST')

     


        return await this.userService.getAllUsers();
        // return('I am Here as users')
    }

    // @Get(':id')
    // async findUserById(@Param('id') id : any) : Promise<User>{
    //     return await this.userService.findOne(id);
    // }

    @Post('')
    async createUser(@Body() { email, password, is_active, full_name, schema_name }) {



        return await this.userService.createUser(email, password, is_active, full_name, schema_name)
    }
}