import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';

export class EditAnimalDto extends PartialType(CreateAnimalDto){}