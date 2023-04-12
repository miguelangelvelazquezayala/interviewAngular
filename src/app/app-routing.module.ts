import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
