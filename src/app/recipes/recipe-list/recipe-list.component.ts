import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://i2.wp.com/mamaloli.com/wp-content/uploads/2011/08/bbqchicken-7.jpg?resize=960%2C640'
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://i2.wp.com/mamaloli.com/wp-content/uploads/2011/08/bbqchicken-7.jpg?resize=960%2C640'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
