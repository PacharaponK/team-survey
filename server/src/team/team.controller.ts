import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { TeamsService } from './team.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { UpdateTeamDto } from './dto/update-team.dto';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { RoleGuard } from 'src/auth/guard/role.guard';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) { }

  // ADMIN-ACCESS
  @Roles('admin')
  @UseGuards(JwtAuthGuard)
  @Post('admin-access')
  async createTeam(@Body() data) {
    return this.teamsService.createTeam(data);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard)
  @Put('admin-access/:id')
  async updateTeam(@Param('id') id: number, @Body() data: UpdateTeamDto) {
    return this.teamsService.updateTeam(id, data);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('admin-access')
  async getAllTeamsOrQuery(@Query('team_name') teamName: string) {
    return this.teamsService.getAllTeamsOrQuery(teamName);
  }


  // TEAM-LEADER-ACCESS
  @Roles('team_leader')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('team-leader-access')
  async getCurrentTeamLeaderTeam(@GetUser() user: User) {
    return this.teamsService.getCurrentTeamLeaderTeam(user);
  }

}
