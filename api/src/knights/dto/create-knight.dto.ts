import { IsArray, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class CreateKnightDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly nickname: string;

    @IsString()
    @IsNotEmpty()
    readonly birthday: string;

    @IsArray()
    @IsOptional()
    readonly weapons: object;

    @IsObject()
    @IsOptional()
    readonly attributes: object;

    @IsString()
    @IsOptional()
    readonly keyAttribute: string;
}
