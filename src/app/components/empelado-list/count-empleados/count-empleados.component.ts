import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-count-empleados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './count-empleados.component.html',
  styleUrl: './count-empleados.component.css'
})
export class CountEmpleadosComponent {
  @Input() todos: number;
  @Input() masculinos: number;
  @Input() femeninos: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSeleccionado = 'Todos';

  constructor(){
    this.todos = 0;
    this.femeninos = 0;
    this.masculinos = 0;
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }
}
