
import { Body, Controller, Get, Param, Post, Req, } from "@nestjs/common";
import { CustService } from "src/services/cust.service";


@Controller('customer')
export class CustController {
    constructor(
        private readonly custService: CustService,

    ) { }


    @Get('')
    async findAllUsers(@Req() request: Request) {
        
    }

    

    @Post('')
    async createUser(@Body() { name } ,@Req() request: Request) {

        console.log(request.headers['x-tenant_id'], 'REQUEST')


        const schemaRequested = request.headers['x-tenant_id']

        this.custService.createCust(schemaRequested , name)

        return(`${schemaRequested} I am customer`)



        // return await this.userService.createUser(email, password, is_active, full_name, schema_name)
    }
}