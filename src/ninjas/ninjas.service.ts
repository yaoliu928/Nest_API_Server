import { Injectable } from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 0,
      name: 'ninjaA',
      weapon: 'stars',
    },
    {
      id: 1,
      name: 'ninjaB',
      weapon: 'nunchucks',
    },
  ];

  getNinjas(weapon: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinjaById(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinjaById(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });
    return this.getNinjaById(id);
  }

  deleteNinjaById(id: number) {
    const toBeRemoved = this.getNinjaById(id);
    this.ninjas = this.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    return toBeRemoved;
  }
}
