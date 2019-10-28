
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    CategoriesComponent,
    RecipeListComponent,
    RecipeComponent,
  ],
  providers: [
  ],
  exports: [
  ],



})
export class CoreModule { }
