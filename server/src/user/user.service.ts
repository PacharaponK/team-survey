import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from 'src/role/entities/role.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  // GLOBAL
  async getRoleById(id: number): Promise<Role> {
    try {
      const user = await this.usersRepository.findOne({
        where: { id },
        relations: ['role'],
      });

      if (!user || !user.role) {
        throw new Error('User or role not found');
      }

      return user.role;
    } catch (err) {
      throw new Error(`Error retrieving role: ${err.message}`);
    }
  }

  async loginWithEmailOrUsername(payload: Partial<User>): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: payload,
      relations: ['role'],
    });
  }

  async getProfile(user: Partial<User>): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: { id: user.id },
      relations: ['role', 'team', 'customers']
    });
  }

  async register(user: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: [{ username: user.username }, { email: user.email }],
    });

    if (existingUser) {
      if (existingUser.username === user.username) {
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
      }
      if (existingUser.email === user.email) {
        throw new HttpException('Email already exists', HttpStatus.CONFLICT);
      }
    }

    return await this.usersRepository.save(user);
  }



  // ADMIN
  async getAllUsersOrQuery(username: string) {
    try {
      if (username) {
        return await this.usersRepository.findOne({ where: { username: username }, relations: ['team', 'role', 'customers'] })
      }

      else {
        return await this.usersRepository.find({ relations: ['team', 'role', 'customers'] });
      }
    }
    catch (error) {
      throw new Error('Failed to query user: ' + error.message);
    }
  }

 

  // TEAM-LEADER
  async getAllCurrentTeamLeaderUsersOrQuery(user: User) {
    try {

      return await this.usersRepository.find({ where: { team: { leader: { id: user.id } } }, relations: ['team'] })

    }
    catch (error) {

    }
  }

}  