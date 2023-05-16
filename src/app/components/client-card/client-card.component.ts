import { Component, Input } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent {

  @Input()
  client: Client = {
    strEstatus: "",
    strID: "",
    strNombre: "",
    strContacto: "",
    strEmail: "",
    strUsuario: "",
    strUsuarioNombre: "",
    intDias: 0,
    strTipo: ""
  }

  showModal(){

  }
}
