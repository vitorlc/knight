import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateKnightDto } from './dto/create-knight.dto';
import { UpdateKnightDto } from './dto/update-knight.dto';
import { Knight, KnightDocument } from './schemas/knights.schema';

@Injectable()
export class KnightsService {
  constructor(@InjectModel(Knight.name) private KnightModel: Model<KnightDocument>) { }

  create(createKnightDto: CreateKnightDto) {
    const createdKnight = new this.KnightModel(createKnightDto);
    return createdKnight.save();
  }

  findAll() {
    return this.KnightModel.find();
  }

  findOne(id: string) {
    const existingKnight = this.KnightModel.findById(id).exec();
    if (!existingKnight) throw new NotFoundException(`Knight #${id} not found`);
    return existingKnight;
  }

  update(id: string, updateKnightDto: UpdateKnightDto) {
    const existingKnight = this.KnightModel.findByIdAndUpdate(id, updateKnightDto, { new: true });
    if (!existingKnight) throw new NotFoundException(`Knight #${id} not found`);
    return existingKnight;
  }

  remove(id: string) {
    const deletedKnight = this.KnightModel.findByIdAndDelete(id);
    if (!deletedKnight) throw new NotFoundException(`Knight #${id} not found`);
    return deletedKnight;
  }
}
