import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="well">
    <div class="well" id="filter-food">
      <label>Filter your food list by calories: </label>

      <select (change)="onChange($event.target.value)">
        <option value="allFood">All Food</option>
        <option value="highCalorie">500 Cal or Above</option>
        <option value="lowCalorie">Below 500 Cal</option>
      </select><br>
    </div>

    <div class="well" id="display-food">
      <h3>Food List:</h3>
      <hr><br>

      <div *ngFor="let food of childFoodList | calorieFilterPipe:calorieFilter">
        <h4 (click)="foodHasBeenClicked(food)">{{food.name}}</h4>
        <p>Details: {{food.details}}</p>
        <p>{{food.calories}} calories</p><br>
      </div>
    </div>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  foodHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  calorieFilter: string = "allFood";

  onChange(optionFromMenu) {
    this.calorieFilter = optionFromMenu;
  }
}
