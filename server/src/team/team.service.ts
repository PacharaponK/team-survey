import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';


@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) { }

  //ADMIN
  async createTeam(payload: CreateTeamDto) {
    try {
      const newTeam = this.teamsRepository.create({
        name: payload.name,
        ...(payload.leader && { leader: payload.leader }),
        ...(payload.members && { members: payload.members.map((id) => { return { id: id } }) })
      });
      return await this.teamsRepository.save(newTeam);
    } catch (error) {
      throw new Error('Failed to create team: ' + error.message);
    }
  }

}
