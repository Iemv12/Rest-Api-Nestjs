import { Animal } from './entities/animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Animal])
  ],
  controllers: [AnimalController],
  providers: [AnimalService]
})
export class AnimalModule {}
