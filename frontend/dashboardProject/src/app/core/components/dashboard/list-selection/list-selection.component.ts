import { Component } from '@angular/core';

@Component({
  selector: 'app-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.css']
})
export class ListSelectionComponent {
  task: string[]= [
    'Aprentação seminário GPG',
    'Apresentação dashboard',
    'Prova sobre segurança nas camadas Aso',
    'Apresentação portifólio teti',
    'Entrega de aplicativo'
]
}
