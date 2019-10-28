import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './ modules/core/components/categories/categories.component';
import { RecipeListComponent } from './ modules/core/components/recipe-list/recipe-list.component';
import { RecipeComponent } from './ modules/core/components/recipe/recipe.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'сategories',
  },
  {
    path: 'сategories',
    component: CategoriesComponent,
  },
  {
    path: 'recipe-list',
    component: RecipeListComponent,
  },
  {
    path: 'recipe',
    component: RecipeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
