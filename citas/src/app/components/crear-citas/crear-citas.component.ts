import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  @Output() nuevaCita = new EventEmitter<any>();

  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formularioIncorrecto = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  agregarCita() {
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioIncorrecto = true;
    } else {

      this.formularioIncorrecto = false;

      /// Creando objeto para enviarlo al padre
      const CITA = {
        nombre: this.nombre,
        fecha: this.fecha,
        hora: this.hora,
        sintomas: this.sintomas
      }
      this.nuevaCita.emit(CITA);
      this.resetCampos();
    }
  }

  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
