import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { register, registerSchema } from 'src/schemas/register.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: register.name, schema: registerSchema }
    
  ])],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
