import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood">
    <h3>Edit food entry: {{childSelectedFood.name}}</h3><br>

    <label for="food-name">Enter food name:</label><br>
    <input type="text" name="food-name" [(ngModel)]="childSelectedFood.name"><br><br>

    <label for="food-details">Enter details:</label><br>
    <textarea type="text" name="food-details" [(ngModel)]="childSelectedFood.details"></textarea><br><br>

    <label for="food-calories">Enter calories (number only):</label><br>
    <input type="number" name="food-calories" [(ngModel)]="childSelectedFood.calories"><br><br>

    <button (click)="doneButtonClicked()">Done</button>
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
