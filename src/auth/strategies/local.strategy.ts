import { AuthService } from './../auth.service';
// import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/user.entity';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameFields: 'email',
    });
  }

  validate(email: string, password: string): Promise<User> {
    return this.authService.validateUser(email, password);
  }
}
