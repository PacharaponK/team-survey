import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async validateUser(usernameOrEmail: string, password: string): Promise<any> {
    const isEmail = usernameOrEmail.includes('@') && usernameOrEmail.includes('.com');

    const user = isEmail
      ? await this.usersService.findOne({ email: usernameOrEmail })
      : await this.usersService.findOne({ username: usernameOrEmail });

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      user: {
        // id: user.user.id,
        username: user.user.username,
        email: user.user.email,
        created_at: user.user.created_at,
        updated_at: user.user.updated_at
      }
    };
    console.log({ payload });
    // console.log({
    //   access_token: this.jwtService.sign(payload),
    // })
    return {
      access_token: this.jwtService.sign(payload),
    };

  }

  async register(data) {
    data.password = await bcrypt.hash(data.password, 10)
    let response = await this.usersService.create(data);

    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token)
  }
}