import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './components/pizzas-list/pizza-list.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';

const routes: Routes = [
  {path: 'list', component: PizzaListComponent},
  {path: 'new', component: PizzaFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
