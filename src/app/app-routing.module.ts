import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YesComponent } from './components/yes/yes.component';
import { NoComponent } from './components/no/no.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'yeah', component: YesComponent},
  {path: 'oooohhh', component: NoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
