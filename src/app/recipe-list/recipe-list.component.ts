import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is test description', 'https://vectorified.com/images/recipe-icon-33.png'),
    new Recipe('A test recipe', 'This is test description', 'https://vectorified.com/images/recipe-icon-33.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
