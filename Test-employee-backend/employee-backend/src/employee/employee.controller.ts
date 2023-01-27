import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ObjectId } from 'mongoose';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.employeeService.findOne(id);
  }
  
//to get employee details under a designation
//pass designation id 
  @Get('designation/:id')
  findEmp_Designation(@Param('id') id: ObjectId) {
    return this.employeeService.findEmp_Designation(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.employeeService.remove(id);
  }
}
