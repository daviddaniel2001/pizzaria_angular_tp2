import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaListComponent } from './components/pizzas-list/pizza-list.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaFormComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PizzaModule { }
