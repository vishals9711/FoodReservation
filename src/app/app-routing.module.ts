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
  },  { path: 'registration-page1', loadChildren: './registration-page1/registration-page1.module#RegistrationPage1PageModule' },
  { path: 'registration-page2', loadChildren: './registration-page2/registration-page2.module#RegistrationPage2PageModule' },
  { path: 'registration-page3', loadChildren: './registration-page3/registration-page3.module#RegistrationPage3PageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
