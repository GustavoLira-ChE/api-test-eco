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
    let element = document.getElementById(this.client.strID);
    let body = document.getElementsByTagName("body")[0];
    if(element != null){
      if(body != null){
        element.style.display = "grid";
        body.style.overflowY = "hidden";
        window.scrollTo(0, 0);
      }
    }
  }

  hiddenModal(){
    let element = document.getElementById(this.client.strID);
    let body = document.getElementsByTagName("body")[0];
    if(element != null){
      if(body != null){
        element.style.display = "none";
        body.style.overflowY = "inherit";
      }
    }
  }
}
