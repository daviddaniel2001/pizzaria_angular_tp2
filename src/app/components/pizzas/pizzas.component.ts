import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';
@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzas = data;
    });
  }

}
