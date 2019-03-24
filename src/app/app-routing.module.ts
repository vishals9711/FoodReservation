import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'registration-page1', loadChildren: './registration-page1/registration-page1.module#RegistrationPage1PageModule' },
  { path: 'favpage', loadChildren: './favpage/favpage.module#FavpagePageModule' },
  { path: 'restaurant-expand/:r_id', loadChildren: './restaurant-expand/restaurant-expand.module#RestaurantExpandPageModule' },
  { path: 'foodmenu/:r_id', loadChildren: './foodmenu/foodmenu.module#FoodmenuPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
