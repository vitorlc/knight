import { Injectable } from '@nestjs/common';
import { CreateKnightDto } from './dto/create-knight.dto';
import { UpdateKnightDto } from './dto/update-knight.dto';

@Injectable()
export class KnightsService {
  create(createKnightDto: CreateKnightDto) {
    return 'This action adds a new knight';
  }

  findAll() {
    return `This action returns all knights`;
  }

  findOne(id: number) {
    return `This action returns a #${id} knight`;
  }

  update(id: number, updateKnightDto: UpdateKnightDto) {
    return `This action updates a #${id} knight`;
  }

  remove(id: number) {
    return `This action removes a #${id} knight`;
  }
}
