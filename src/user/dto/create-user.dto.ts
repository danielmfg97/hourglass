import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/helpers/message.helper";
import { RegExHelper } from "src/helpers/regex.helper";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
    password: string;
}
