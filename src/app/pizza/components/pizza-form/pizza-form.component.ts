import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private pizzaService: PizzaService,
              private router: Router) {
    this.formGroup = formBuilder.group({
      sabor:['', Validators.required],
      ingredientes:['', Validators.required]
    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const novaPizza = this.formGroup.value;
      this.pizzaService.salvar(novaPizza).subscribe({
        next: (pizzaCadastrada) => {
          this.router.navigateByUrl('/pizzas/list');
        },
        error: (err) => {
          console.log('Erro ao salvar' + JSON.stringify(err));
        }
      })

    }
  }

}
