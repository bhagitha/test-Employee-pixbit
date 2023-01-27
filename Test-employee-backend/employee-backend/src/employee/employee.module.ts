import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { employee, employeeSchema } from 'src/schemas/employee.schema';
import { register, registerSchema } from 'src/schemas/register.schema';
import { contactinfo, contactinfoSchema } from 'src/schemas/contactinfo.schema';
import { designation, designationSchema } from 'src/schemas/designation.schema';


@Module({
  imports: [MongooseModule.forFeature([
    { name: employee.name, schema: employeeSchema },
    { name: register.name, schema: registerSchema },
    { name: contactinfo.name, schema: contactinfoSchema },
    { name: designation.name, schema: designationSchema }
  ])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
