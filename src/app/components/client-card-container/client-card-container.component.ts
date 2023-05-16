import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { FetchInformationService } from 'src/app/service/fetch-information.service';

@Component({
  selector: 'app-client-card-container',
  templateUrl: './client-card-container.component.html',
  styleUrls: ['./client-card-container.component.css']
})
export class ClientCardContainerComponent implements OnInit{

  clients: Client[] = [];

  constructor(
    private fetchData: FetchInformationService
  ){}

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(){
    console.log("Bring data from API...")
    this.fetchData.fetchInformation().subscribe(item => {
      this.clients = item;
    });
  }

}
