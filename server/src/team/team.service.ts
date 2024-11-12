import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { User } from 'src/user/entities/user.entity';


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

  async getAllTeamsOrQuery(teamName: string) {
    try {
      if (teamName) {
        return await this.teamsRepository.findOne({ where: { name: teamName }, relations: ['leader', 'members'] })
      }
      else {
        return await this.teamsRepository.find({ relations: ['leader', 'members'] })
      }
    }

    catch (error) {
      throw new Error('Failed to query teams: ' + error.message);

    }
  }


  // TEAM-LEADER-ACCESS
  async getCurrentTeamLeaderTeam(user: User) {

    try {

      return await this.teamsRepository.findOne({
        where: {
          leader: { id: user.id },
        },
        relations: ['leader', 'members']
      });
    }

    catch (error) {
      throw new Error('Failed to query team: ' + error.message);

    }
  }

} 
