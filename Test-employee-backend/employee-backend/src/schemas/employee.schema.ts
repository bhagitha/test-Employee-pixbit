import { Transform, Type } from '@nestjs/class-transformer';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { contactinfo } from './contactinfo.schema';
import { designation } from './designation.schema';
import { register } from './register.schema';

export type employeeDocument = employee & Document;

@Schema({ timestamps: true })
export class employee {

  @Prop({ type: String, index: true,  sparse: true })
  name: string;

  @Prop({ type: String, index: true, unique: true, sparse: true })
  email: string;

  @Prop({ type: String, index: true, required: true })
  dob: string;

  @Prop({ type: String, index: true, required: true })
  gender: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: designation.name })
  @Type(() => designation)
  designation_id: designation;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: register.name })
  @Type(() => register)
  register_id: register;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: contactinfo.name })
  @Type(() => contactinfo)
  contactinfo_id: contactinfo;

}

export const employeeSchema = SchemaFactory.createForClass(employee);
