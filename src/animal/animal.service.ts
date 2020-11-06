import { Animal } from './entities/animal.entity';
import { EditAnimalDto } from './dto/edit-animal.dto';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimalService {

    constructor(
        @InjectRepository(Animal)
        private readonly animalRepository:Repository<Animal>
    ){}

    async getAnimals(){
        return await this.animalRepository.find()
    }

    async getOneAnimal(id:string){
        const animalData = await this.animalRepository.findOne(id);
        if(!animalData) throw new NotFoundException("Animal doest exist");

        return animalData
    }

    async createOneAnimal(animal:CreateAnimalDto){
        const animalData = this.animalRepository.create(animal as any)

        return await this.animalRepository.save(animalData);
    }

    async editOneAnimal(id:string,animal:EditAnimalDto){
        const animalData = await this.animalRepository.findOne(id);
        if(!animalData) throw new NotFoundException("Animal doest exist");
        const animalEdit = Object.assign(animalData,animal);

        return await this.animalRepository.save(animalEdit);
    }

    async deleteOneAnimal(id:string){
        const animalData = await this.animalRepository.findOne(id);
        if(!animalData) throw new NotFoundException("Animal doest exist");
        return await this.animalRepository.remove(animalData);
    }
}
