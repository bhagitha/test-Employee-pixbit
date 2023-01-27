import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { contactinfo, contactinfoDocument } from 'src/schemas/contactinfo.schema';
import { designation, designationDocument } from 'src/schemas/designation.schema';
import { employee, employeeDocument } from 'src/schemas/employee.schema';
import { register, registerDocument } from 'src/schemas/register.schema';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectModel(register.name) private registerModal: Model<registerDocument>,
    @InjectModel(employee.name) private employeeModal: Model<employeeDocument>,

    @InjectModel(contactinfo.name) private contactinfoModal: Model<contactinfoDocument>,
  ) { }
  
  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      // console.log(createEmployeeDto)
      const datasave = await new this.employeeModal(createEmployeeDto).save();
      return { status: 200, data: datasave, message: 'employee added' };

    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  //get all registered employees
  async findAll() {
    try {
      const data = await this.employeeModal.find()
      .populate("contactinfo_id")
      .populate("designation_id")
      .exec();
      return {
        status: 200,
        message: 'employee data ',
        employeedata: data,
      }
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  //get a single employee data
  async findOne(id: ObjectId) {
    try {
      const data = await  this.employeeModal.findOne({_id:id})
      .populate("contactinfo_id")
      .populate("designation_id")
      .exec();
      return {
        status: 200,
        message: 'employee single data ',
        employeedata: data,
      }
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
//to get employee details under a designation
//pass designation id 
async findEmp_Designation(id: ObjectId) {
  try {
    const data = await  this.employeeModal.findOne({designation_id:id})
    .populate("contactinfo_id")
    .populate("designation_id")
    .exec();
    return {
      status: 200,
      message: 'employee single data ',
      employeedata: data,
    }
  } catch (error) {
    throw new NotFoundException(error)
  }
}

  //to update employee details
  async update(id: ObjectId, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      const employee = await this.employeeModal
          .findByIdAndUpdate(id, {
            $set: {
              updateEmployeeDto
            }
          })
        if (!employee) {
          throw new NotFoundException();
        }
        return employee;
      } catch (error) {
        throw new NotFoundException(error)
      }
    }
  
    //to delete a record of employee
    remove(id: ObjectId) {
      try {
        return this.employeeModal.findByIdAndRemove(id).exec();
      } catch (error) {
        throw new NotFoundException(error)
      }
    }
  }
