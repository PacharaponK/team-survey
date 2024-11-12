import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';


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

  async updateTeam(id: number, payload: any) {
    try {
      const team = await this.teamsRepository.findOne({ where: { id }, relations: ['leader', 'members'] })

      // return team;

      if (!team) {
        throw new Error(`Team with ID ${id} not found`);
      }

      if (payload.name) {
        team.name = payload.name;
      }

      if (payload.leader) {
        team.leader = payload.leader;
      }

      if (payload.members) {
        team.members = Array.from(new Set([...team.members.map(user => ({ id: user.id })), ...payload.members.map(id => ({ id: id }))]));
      }

      return await this.teamsRepository.save(team);
    }

    catch (error) {
      throw new Error('Failed to create team: ' + error.message);
    }
  }

  async getTeamById(id: number) {
    return await this.teamsRepository.findOne({ where: { id: id }, relations: ['leader', 'members'] })
  }

}
