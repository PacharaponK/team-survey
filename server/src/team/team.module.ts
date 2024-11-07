import { Module } from '@nestjs/common';
import { TeamsService } from './team.service';
import { TeamsController } from './team.controller';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
