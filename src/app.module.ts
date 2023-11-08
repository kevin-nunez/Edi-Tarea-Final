import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosController } from './empleados/empleados.controller';
import { employeesService } from './empleados/empleados.service';

@Module({
  imports: [],
  controllers: [AppController, EmpleadosController],
  providers: [AppService, employeesService],
})
export class AppModule {}
