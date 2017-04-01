import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <h3>Food List:</h3><br>

  <div *ngFor="let food of childFoodList | calorieFilterPipe:calorieFilter">
    <h4 (click)="foodHasBeenClicked(food)">{{food.name}}</h4>
    <p>Details: {{food.details}}</p>
    <p>{{food.calories}} calories</p><br>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  foodHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
