import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //this code was used for using service
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'A test Recipe',
  //     'This is simply a test',
  //     'https://i2.wp.com/mamaloli.com/wp-content/uploads/2011/08/bbqchicken-7.jpg?resize=960%2C640'
  //   ),
  //   new Recipe(
  //     'Another test Recipe',
  //     'This is simply a test',
  //     'https://i2.wp.com/mamaloli.com/wp-content/uploads/2011/08/bbqchicken-7.jpg?resize=960%2C640'
  //   ),
  // ];

  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
