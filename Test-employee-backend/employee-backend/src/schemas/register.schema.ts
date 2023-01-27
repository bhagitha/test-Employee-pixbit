import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type registerDocument = register & Document;

@Schema({ timestamps: true })
export class register {

  @Prop({ type: String, index: true,  sparse: true })
  username: string;

  @Prop({ type: String, index: true, unique: true, sparse: true })
  password: string;

}

export const registerSchema = SchemaFactory.createForClass(register);
