import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://i2.wp.com/mamaloli.com/wp-content/uploads/2011/08/bbqchicken-7.jpg?resize=960%2C640'
    ),
    new Recipe(
      'Another test Recipe',
      'This is simply a test',
      'https://i2.wp.com/mamaloli.com/wp-content/uploads/2011/08/bbqchicken-7.jpg?resize=960%2C640'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
