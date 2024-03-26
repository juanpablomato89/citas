import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas: any[] = [];

  agregarCitas(cita: any) {
    this.listCitas.push(cita);
  }

  eliminarCita(citaIndex: number) {
    this.listCitas.splice(citaIndex, 1);
  }
}
