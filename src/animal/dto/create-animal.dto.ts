import { Containers } from './../enum/containers.enum';
import { EnumToString } from './../../helpers/enumTostring';
import { IsBoolean, IsEnum, IsString, MaxLength, MinLength} from 'class-validator';
import { TypeOfAnimal } from '../enum/animal.enum';

export class CreateAnimalDto{

    @IsString()
    name:string;

    @MinLength(50)
    @MaxLength(500)
    @IsString()
    description:string;

    @IsEnum(TypeOfAnimal,{
        message:`Invalid option, Valids options are ${EnumToString(TypeOfAnimal)}`
    })
    type:TypeOfAnimal;

    @IsEnum(Containers,{
        message:`Invalid option, Valids options are ${EnumToString(Containers)}`
    })
    container:Containers;

    @IsBoolean()
    extinct:boolean;

    @IsString()
    image:string;
}