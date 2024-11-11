import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TeamsService } from './team.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) { }

  // ADMIN
  @Roles('admin')
  @UseGuards(JwtAuthGuard)
  @Post()
  async createTeam(@Body() data) {
    return this.teamsService.createTeam(data);
  }

}
