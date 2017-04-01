import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood" class="well" id="edit-food-form">
    <h3>Edit food entry: {{childSelectedFood.name}}</h3><br>

    <label for="food-name">Enter food name:</label><br>
    <input type="text" name="food-name" class="form-control" [(ngModel)]="childSelectedFood.name"><br>

    <label for="food-details">Enter details:</label><br>
    <textarea type="text" name="food-details" class="form-control" [(ngModel)]="childSelectedFood.details"></textarea><br>

    <label for="food-calories">Enter calories (number only):</label><br>
    <input type="number" name="food-calories" class="form-control" [(ngModel)]="childSelectedFood.calories"><br>

    <button class="btn" (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
