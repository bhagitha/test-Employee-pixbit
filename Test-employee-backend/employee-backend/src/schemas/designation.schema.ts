import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type designationDocument = designation & Document;

@Schema({ timestamps: true })
export class designation {

  @Prop({ type: String, index: true,  sparse: true })
  designation: string;

}

export const designationSchema = SchemaFactory.createForClass(designation);
