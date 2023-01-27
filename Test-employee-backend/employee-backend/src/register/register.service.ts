import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model,ObjectId } from 'mongoose';
import { register, registerDocument } from 'src/schemas/register.schema';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';

@Injectable()
export class RegisterService {

  constructor(
    @InjectModel(register.name) private registerModal: Model<registerDocument>
  ) { }

  async create(createRegisterDto: CreateRegisterDto) {
    try {
      // console.log(createRegisterDto)
      const datasave = await new this.registerModal(createRegisterDto).save();
      return { status: 200, data: datasave, message: 'registration completed' };

    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findAll() {
    try {
      const data = await this.registerModal.find().exec();
      return {
        status: 200,
        message: 'regsitered data ',
        registereddata: data,
      }
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: ObjectId) {
    try {
      const data = await this.registerModal.findOne({_id:id}).exec();
      return {
        status: 200,
        message: 'regsitered data ',
        registereddata: data,
      }
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
  //code here

  async update(id: ObjectId, updateRegisterDto: UpdateRegisterDto) {
    try {
    const user = await this.registerModal
        .findByIdAndUpdate(id, {
          $set: {
            updateRegisterDto
          }
        })
      if (!user) {
        throw new NotFoundException();
      }

      return user;
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  remove(id: ObjectId) {
    try {
      return this.registerModal.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
