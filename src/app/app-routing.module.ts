import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { RevenueComponent } from './revenue/revenue.component';
import { SearchComponent } from './search/search.component';
import { SettlementComponent } from './settlement/settlement.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settlement', component: SettlementComponent},
  {path: 'revenue', component: RevenueComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
