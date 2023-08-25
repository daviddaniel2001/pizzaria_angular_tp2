import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  tableColumns: string[] = ['id-column', 'sabor-column', 'ingredientes-column'];
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzas = data;
    });
  }

}
