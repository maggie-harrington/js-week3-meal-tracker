import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <header class="jumbotron">
      <h1>Meal Tracker</h1><br>
      <p>By <a href="https://github.com/maggie-harrington">Maggie Harrington</a></p>
    </header>

    <div class="row">
      <div class="col-xs-7">
        <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
      </div>

      <div class="col-xs-5 well">
        <new-food (newFoodSender)="addFood($event)"></new-food><br>

        <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterFoodList: Food[] = [
    new Food("venti hazelnut latte", "Starbucks breakfast", 320),
    new Food("blueberry scone", "Starbucks breakfast part 2, yikes that's 740 calories already!", 420),
    new Food("turkey pesto panini", "More food from Starbucks because I need lunch fast!", 490),
    new Food("my dinner", "not sure yet...but since I have eaten 1230 calories already it needs to be a salad...", 500)
  ];

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }

  selectedFood = null;

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}
