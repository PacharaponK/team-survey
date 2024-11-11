import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async validateUser(usernameOrEmail: string, password: string): Promise<any> {
    const isEmail = usernameOrEmail.includes('@') && usernameOrEmail.includes('.com');

    const user = isEmail
      ? await this.usersService.loginWithEmailOrUsername({ email: usernameOrEmail })
      : await this.usersService.loginWithEmailOrUsername({ username: usernameOrEmail });

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      // console.log(result)
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = user.user
    return {
      access_token: this.jwtService.sign(payload),
      ...payload
    };
  }

  async register(data: CreateUserDto) {
    data.password = await bcrypt.hash(data.password, 10)
    let response = await this.usersService.register(data);

    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token)
  }
}