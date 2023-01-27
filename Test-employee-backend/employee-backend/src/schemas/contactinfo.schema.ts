import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type contactinfoDocument = contactinfo & Document;

@Schema({ timestamps: true })
export class contactinfo {

  @Prop({ type: String, index: true,  sparse: true })
  contactinfo: string;

}

export const contactinfoSchema = SchemaFactory.createForClass(contactinfo);
