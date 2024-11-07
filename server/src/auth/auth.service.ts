import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ "email": email });

    // console.log(await bcrypt.hash(password, 10));

    // console.log(password, user.password)
    // console.log(bcrypt.compare(password, user.password))

    if (user && await bcrypt.compare(password, user.password)) {

      const { password, ...result } = user;

      console.log( result)
      return result;
    }
    return null;
  }

  async login(user: any) {
    // console.log(user);
    const payload = {
      user: {
        // id: user.user.id,
        // name: user.name,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at
      }
    };
    // console.log({ payload });
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