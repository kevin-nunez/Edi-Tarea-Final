import {Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { employeesModel } from './empleadosModel';
import { employeesService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio: employeesService) {}

    @Get()
    getempleados(){
        return this.servicio.getEmployees();
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