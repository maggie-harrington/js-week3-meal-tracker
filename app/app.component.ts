import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1><br>

    <div *ngFor="let food of foods">
      <h4 (click)="editFood(food)">{{food.name}}</h4>
      <p>Details: {{food.details}}</p>
      <p>{{food.calories}} calories</p><br>
    </div>

    <div *ngIf="selectedFood">
      <h3>Edit food entry: {{selectedFood.name}}</h3><br>

      <label for="food-name">Enter food name:</label><br>
      <input type="text" name="food-name" [(ngModel)]="selectedFood.name"><br><br>

      <label for="food-details">Enter details:</label><br>
      <textarea type="text" name="food-details" [(ngModel)]="selectedFood.details"></textarea><br><br>

      <label for="food-calories">Enter calories (number only):</label><br>
      <input type="number" name="food-calories" [(ngModel)]="selectedFood.calories"><br><br>

      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  foods: Food[] = [
    new Food("venti hazelnut latte", "Starbucks breakfast", 320),
    new Food("blueberry scone", "Starbucks breakfast part 2, yikes that's 740 calories already!", 420),
    new Food("turkey pesto panini", "More food from Starbucks because I need lunch fast!", 490),
    new Food("my dinner", "not sure yet...but since I have eaten 1230 calories already it needs to be a salad...", 500)
  ];

  selectedFood = null;

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}

export class Food {
  constructor(public name: string, public details: string, public calories: number) {}
}
