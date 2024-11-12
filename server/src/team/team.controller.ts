import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TeamsService } from './team.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { UpdateTeamDto } from './dto/update-team.dto';

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

  @Roles('admin')
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateTeam(@Param('id') id: number, @Body() data: UpdateTeamDto) {
    return this.teamsService.updateTeam(id, data);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getTeamById(@Param('id') id: number) {
    return this.teamsService.getTeamById(id);
  }

}
