import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div class="well" id="add-food-form">
    <h3>Enter new food:</h3><br>

    <label for="new-food-name">Enter food name:</label><br>
    <input type="text" name="new-food-name" class="form-control" #newName><br>

    <label for="new-food-details">Enter details:</label><br>
    <textarea type="text" name="new-food-details" class="form-control" #newDetails></textarea><br>

    <label for="new-food-calories">Enter calories (number only):</label><br>
    <input type="number" name="new-food-calories" class="form-control" #newCalories><br>

    <button class="btn" (click)="submitNewFoodForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value=''">Enter</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitNewFoodForm(name: string, details: string, calories: number) {
    var newFoodToAdd: Food = new Food(name, details, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
