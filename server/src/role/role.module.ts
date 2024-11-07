import { Module } from '@nestjs/common';
import { RolesService } from './role.service';
import { RolesController } from './role.controller';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
