## Planning

### Specifications / project requirements

Create a meal tracking application. Users should be able to log foods they've eaten each day, including details about the meal and its number of calories. You may assume foods being logged are for a single day (you are not required to keep track of multiple days' meals).

###### As a user:
* I want to log a food I have eaten by submitting a form with food name, calories and details.
* I want to view a list of foods I have logged.
* I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
* I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were 100 calories instead of 365).


### Project stages

* Initial project setup (see details below in next section)

* Add array of sample hard-coded Food objects and display list of data to user with ngFor

* Add form/functionality to allow user to edit existing data when clicked using ngIf

* Add form/functionality to allow user to add new data using template reference variables

* Add functionality for user to choose to display all, high calorie, or low calorie foods

* Clean up code/ refactor

* Styling with SASS (if time allows)


###  Initial project setup:

* From command line, `cd Desktop`

* `mkdir js-week3-meal-tracker`

* `cd js-week3-meal-tracker`

* Initialize git repository and add remote

* Create _index.html_ with code from Angular 2 documentation

* Create _package.json_ with packages and dependencies

* `npm install`

* `npm install bower -g`

* `bower init` (will create _bower.json_)

* Create _.gitignore_ for dependencies

* Create _resources_ directory with subdirectories _images_, _styles_, and _js_.

* Create _resources/styles/styles.css_

* Back in top level of project, create _tsconfig.json_ to configure TypeScript compiler

* Create _typings.json_ for TypeScript definition files

* Create _gulpfile.js_ containing gulp dependencies and tasks

* Create _app_ directory containing _app.component.ts_ (root component), which contains import statements, annotation, and class declaration

* Create _app/app.module.ts_ (root module) containing import statements, module decorator, and class declaration

* Create _app/main.ts_ (entry point) which instructs Angular SystemJS how to assemble app when launched

* Create _systemjs.config.js_ in root level for system configuration

* `bower install bootstrap --save`

* Run the following in the command line:

      `npm install`

      `bower install`

      `gulp build`

      `gulp serve`

* The project will appear in the web browser at localhost:3000.
