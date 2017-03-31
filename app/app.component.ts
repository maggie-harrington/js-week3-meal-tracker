import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1><br>

    <div *ngFor="let food of foods">
      <h4>{{food.name}}</h4>
      <p>Details: {{food.details}}</p>
      <p>{{food.calories}} calories</p><br>
    </div>
  </div>
  `
})

export class AppComponent {
  foods: Food[] = [
    new Food("venti hazelnut latte", "Starbucks breakfast", 320),
    new Food("blueberry scone", "Starbucks breakfast part 2, yikes that's 740 calories already!", 420),
    new Food("my lunch", "not sure yet where I'm going for lunch...", 500),
    new Food("my dinner", "not sure yet...", 500)
  ];
}

export class Food {
  constructor(public name: string, public details: string, public calories: number) {}
}
