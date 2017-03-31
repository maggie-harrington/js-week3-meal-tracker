import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { CalorieFilterPipe } from './calorie-filter.pipe';
import { NewFoodComponent } from './new-food.component';

@NgModule({
  imports: [BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  CalorieFilterPipe,
                  NewFoodComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
