import { plainToClass } from 'class-transformer';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/users/user.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthUser } from 'src/decorators/auth.user.decorator';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/login')
  login(@Body() Body): Promise<{ accessToken: string }> {
    return this.authService.generateJwtToken(Body.user);
  }

  @Post('/register')
  async register(@Body() Body): Promise<User> {
    const user = await this.userService.findByEmail(Body.email);
    console.log(Body.email);
    

    if (user)
      throw new UnauthorizedException(
        `User already exist, please use another email`,
      );

    const createdUser = await this.userService.store(Body.body);
    return createdUser;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async myProfile(@Body() Body, @AuthUser() authUser): Promise<any> {
    const user = await this.userService.findById(authUser.id);

    return {
      ...plainToClass(User, user),
      authUser,
    };
  }
}
