import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private baseURL: string =  'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${this.baseURL}/pizzas`);
  }

  salvar(pizzas: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`${this.baseURL}/pizzas`, pizzas);
  }
}
