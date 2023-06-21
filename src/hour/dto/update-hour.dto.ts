import { PartialType } from '@nestjs/mapped-types';
import { CreateHourDto } from './create-hour.dto';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/models/user.model';

export class UpdateHourDto extends PartialType(CreateHourDto) {
    @IsNotEmpty()
    project_id: number;

    @IsNotEmpty()
    user_id: number;

    @IsNotEmpty()
    started_at: Date;

    @IsNotEmpty()
    ended_at: Date;
}
