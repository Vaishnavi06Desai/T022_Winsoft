import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecryptComponent } from './decrypt/decrypt.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "decrypt",
    component: DecryptComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
