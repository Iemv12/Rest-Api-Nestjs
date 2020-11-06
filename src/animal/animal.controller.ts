import { AnimalService } from './animal.service';
import { EditAnimalDto } from './dto/edit-animal.dto';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

@Controller('animal')
export class AnimalController {
    constructor(
        private readonly animalService:AnimalService
    ){}

    @Get()
    async getAnimals(){
        const data = await this.animalService.getAnimals();
        return data
    }

    @Get(':id')
    async getOneAminal(
        @Param('id') id:string
    ){
        return await this.animalService.getOneAnimal(id)
    }

    @Post()
    async createOneAnimal(
        @Body() animal:CreateAnimalDto
    ){
        return await this.animalService.createOneAnimal(animal)
    }

    @Put(':id')
    async editOneAnimal(
        @Body() animal:EditAnimalDto,
        @Param('id') id:string
    ){
        return await this.animalService.editOneAnimal(id,animal)
    }

    @Delete(':id')
    async deleteOneAnimal(
        @Param('id') id:string
    ){

        return await this.animalService.deleteOneAnimal(id)
    }

}
