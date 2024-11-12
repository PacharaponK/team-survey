import { User } from 'src/user/entities/user.entity';

export class UpdateTeamDto {
    name?: string;

    leader?: User;

    members?: number[]
}

