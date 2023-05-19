import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { FetchInformationService } from 'src/app/service/fetch-information.service';

@Component({
  selector: 'app-client-card-container',
  templateUrl: './client-card-container.component.html',
  styleUrls: ['./client-card-container.component.css']
})
export class ClientCardContainerComponent implements OnInit,  OnChanges{

  clients: Client[] = [];
  @Input()
  wordFilter = "";

  constructor(
    private fetchData: FetchInformationService
  ){}

  ngOnInit(): void {
    this.retrieveData();
  }

  ngOnChanges():void {
    this.retrieveData();
  }

  retrieveData(){
    this.fetchData.fetchInformation(this.wordFilter).subscribe(item => {
      this.clients = item;
    });
  }

}
