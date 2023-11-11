import {Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { employeesModel } from './empleadosModel';
import { employeesService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio: employeesService) {}

    @Get()
  getemployees() {
    return this.servicio.getEmployees();
  }

    @Get(':id')
  getEmpleado(@Param('id') id: number) {
    const empleado = this.servicio.getEmployee(id);
    if (empleado) {
      return empleado;
    } else {
      throw new Error('Empleado con ID ${id} no encontrado.');
    }
  }

    @Post()
    addempleados(@Body() empleado: employeesModel){
        return this.servicio.addEmployee(empleado);
    }

    @Put(":id")
    modifysalary(@Body() modelo: employeesModel,@Param('id') id: number){
        return this.servicio.modifyemployee(id,modelo);
    }
    @Delete(":id")
    deleteemployee(@Param("id") id: number) {
        return this.servicio.deleteemployee(id);
    }
}