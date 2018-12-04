import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestfireComponent } from './testfire/testfire.component';

const routes: Routes = [
  {path: 'firebase', component:TestfireComponent},
  {path: '', component:TestfireComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
