import { Injectable } from '@angular/core';
import { Connection } from '../models/connectionObject.model';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchInformationService {

  private infoUrl: string = "https://www.ecodeli.mx/ApiRest/ApiEcodeliComercial/v2/PaginaEcodeli/get_Proveedores";

  private connection: Connection = {
    "strAccion": 1,
    "strUsuario": "rnazario",
    "strSucursal": "",
    "strPeriodo": 5,
    "strEjercicio": 2023,
    "strID": "",
    "strCoordinador": "",
    "strConexion": "connection"
  };

  constructor(
    private http: HttpClient
  ) { }

  fetchInformation() {
    return this.http.post<Client[]>(this.infoUrl,this.connection);
  }
}
