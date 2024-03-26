import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {
  @Input() citas: any;
  @Output() citadelete = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  eliminarCita(index: number) {
    this.citadelete.emit(index);
  }

}
