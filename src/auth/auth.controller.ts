import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";



//  nest g module user for creating the module using cli nest

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('signup')
    signup() {

        return this.authService.signup()

    }


    @Post('signin')
    signin() {
        return this.authService.signin()

    }

}