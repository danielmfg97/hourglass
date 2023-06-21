import { IsNotEmpty } from "class-validator";
import { User } from "src/models/user.model";

export class CreateHourDto {
    @IsNotEmpty()
    project_id: number;

    @IsNotEmpty()
    user_id: number;

    @IsNotEmpty()
    started_at: Date;

    @IsNotEmpty()
    ended_at: Date;
}
