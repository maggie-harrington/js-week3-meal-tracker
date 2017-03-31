import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './app.component';

@Pipe({
  name: "calorieFilterPipe",
  pure: false
})

export class CalorieFilterPipe implements PipeTransform {
  transform(input: Food[], calorieFilter) {
    var output: Food[] = [];
    if (calorieFilter === "highCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieFilter === "lowCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
