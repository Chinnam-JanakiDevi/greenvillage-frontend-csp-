import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlplantsComponent } from './flplants/flplants.component';
import { HomeComponent } from './home/home.component';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { SpringComponent } from './spring/spring.component';
import { AutumnComponent } from './autumn/autumn.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ImpactComponent } from './impact/impact.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellplantComponent } from './sellplant/sellplant.component';

@NgModule({
  declarations: [
    AppComponent,
    FlplantsComponent,
    HomeComponent,
    SummerComponent,
    WinterComponent,
    SpringComponent,
    AutumnComponent,
    ContactusComponent,
    TimelineComponent,
    ImpactComponent,
    SellplantComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
