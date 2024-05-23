import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { CartComponent } from './component/cart/cart.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SearchComponent } from './component/search/search.component';
import { AboutComponent } from './component/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent,},
  {path:'about',component:AboutComponent,},
  {path:'search',component:SearchComponent},
  {path:'login',component:LoginComponent,},
  {path:'cart',component:CartComponent},
  {path:'**',component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
