import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsShowComponent } from './products-show/products-show.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path:'home',
    component:HomeComponent
  },{
    path:'products',
    component:ProductsShowComponent

  },{
    path:'singleproduct',
    component:SingleproductComponent

  },{
    path:'store',
    component:StoreComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
