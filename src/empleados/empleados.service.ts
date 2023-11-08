import { Injectable } from '@nestjs/common';
import { employeesModel } from './empleadosModel';

@Injectable()
export class employeesService {
employees = [];

constructor() {
    let employee = {
        "id": 1,
        "name": "Kevin",
        "phone": "2494361589",
        "salary": "1234567"
    }
    this.employees.push(employee);
    
    employee = {
        "id": 2,
        "name": "Juanito",
        "phone": "1234567892",
        "salary": "348975",
    }
    this.employees.push(employee);
    
    employee={
        "id": 3,
        "name": "Paco",
        "phone": "4795123547",
        "salary": "784475",
    }
    this.employees.push(employee);
}
getEmployees(){
    return this.employees;
  }
getEmployee(id: number) {
    return this.employees.find((e) => e.id == id);
}
addEmployee(employeeModel: employeesModel){
    let employee ={
        "id": employeeModel.id,
        "name": employeeModel.name,
        "phone": employeeModel.phone,
        "salary": employeeModel.salary,
    }
    this.employees.push(employee);
    return "Agregaste un nuevo empleado"
 }
 modifyemployee(id: number, modelo: employeesModel){
    let employee = null;
    for(let i=0;i<this.employees.length;i++){
       if(this.employees[i].id==id){
        this.employees[i].salary=modelo.salary;
        return "Modificaste el salario"
       } 
    }
    return "ingresaste un empeado inexistente"
 }

 deleteemployee(id) {
    if(((id)>0)&&((id)<this.employees.length)){
    this.employees.splice((id)-1,1)
    return this.employees
    }else{
     return "ingresaste un empeado inexistente"   
    }
  }

}
