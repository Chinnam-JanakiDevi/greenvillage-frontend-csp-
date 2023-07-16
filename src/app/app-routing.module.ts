import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlplantsComponent } from './flplants/flplants.component';
import { HomeComponent } from './home/home.component';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { SpringComponent } from './spring/spring.component';
import { AutumnComponent } from './autumn/autumn.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ImpactComponent } from './impact/impact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SellplantComponent } from './sellplant/sellplant.component';
import { PhotosComponent } from './photos/photos.component';
import { NonflplantsComponent } from './nonflplants/nonflplants.component';
import { MainComponent } from './main/main.component';
import { OrderformComponent } from './orderform/orderform.component';
import { FormComponent } from './form/form.component';
// import { flatMap } from 'rxjs';

const routes: Routes = [
  {path:'flplants',component:FlplantsComponent},
  {path:'home',component:HomeComponent},
  {path:'summer',component:SummerComponent},
  {path:'winter',component:WinterComponent},
  {path:'spring',component:SpringComponent},
  {path:'autumn',component:AutumnComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'impact',component:ImpactComponent},
  {path:'timeline',component:TimelineComponent},
  {path:'sellplant',component:SellplantComponent},
  {path:'photos',component:PhotosComponent},
  {path:'nonflplants',component:NonflplantsComponent},
  {path:'main',component:MainComponent},
  {path:'orderform',component:OrderformComponent},
  {path:'form',component:FormComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const myRoutings=[
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
    PhotosComponent,
    NonflplantsComponent,
    MainComponent,
    OrderformComponent,
    FormComponent
  ]

