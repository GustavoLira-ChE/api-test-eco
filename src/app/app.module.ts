import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientCardContainerComponent } from './components/client-card-container/client-card-container.component';
import { ClientCardComponent } from './components/client-card/client-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientCardContainerComponent,
    ClientCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
