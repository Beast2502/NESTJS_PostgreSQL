import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User} from "./user.enitiy";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('users')
export class UserController {
    constructor(private readonly userService : UserService){}


    @Get('')
    async findAllUsers(){
        return await this.userService.getAllPolls();
        // return('I am Here as users')
    }

    // @Get(':id')
    // async findUserById(@Param('id') id : any) : Promise<User>{
    //     return await this.userService.findOne(id);
    // }

    @Post('')
    async createUser(@Body() { question, options }: { question: string; options: string[] }) {
        return await this.userService.createPoll(question , options)
    }
}