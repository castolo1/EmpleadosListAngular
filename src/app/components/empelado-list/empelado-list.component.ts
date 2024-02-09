import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/Empleado';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { CountEmpleadosComponent } from './count-empleados/count-empleados.component';

@Component({
  selector: 'app-empelado-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CountEmpleadosComponent],
  templateUrl: './empelado-list.component.html',
  styleUrl: './empelado-list.component.css'
})

export class EmpeladoListComponent{
  listEmpleados: Empleado[] = [
    {legajo: 1, nombre: 'Alberto', apellido: 'Rodriguez', sexo: 'Masculino', salario: 1500},
    {legajo: 2, nombre: 'Alberta', apellido: 'Gonzalez', sexo: 'Femenino', salario: 1400},
    {legajo: 3, nombre: 'Marcelo', apellido: 'Perez', sexo: 'Masculino', salario: 1700},
    {legajo: 4, nombre: 'Agustina', apellido: 'Suar', sexo: 'Femenino', salario: 1300},
    {legajo: 5, nombre: 'Pedro', apellido: 'Uber', sexo: 'Masculino', salario: 1500},
    {legajo: 6, nombre: 'Andres', apellido: 'Bauer', sexo: 'Masculino', salario: 1500},
    {legajo: 7, nombre: 'Juliana', apellido: 'Alfonsin', sexo: 'Femenino', salario: 1200},
    {legajo: 8, nombre: 'Francisco', apellido: 'Fernandez', sexo: 'Masculino', salario: 5000},
    {legajo: 9, nombre: 'Mario', apellido: 'Centurion', sexo: 'Masculino', salario: 1900},
  ];
  radioButtonSeleccionado = 'Todos';

  obtenerTotalEmpleados(): number{
    return this.listEmpleados.length;
  }

  obtenerTotalEmpleadosMasculinos(): number{

    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  obtenerTotalEmpleadosFemeninos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void{
    this.radioButtonSeleccionado=radioButtonSelec;
  }
}
