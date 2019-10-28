import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {

  recipes = [
      {
        title: 'Мытые овощи (помидор и листья салата)',
        name: 'vegetables',
        image: 'https://astv.ru/content/NewsImage/4d/e9/4de90e7d-f182-40f3-8bc1-23737801893b_1.jpg'
      },
      {
        title: 'Жареные куриные слайсы',
        name: 'friedchickenpieces',
        image: 'http://www.calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/49104.jpg'
      },
      {
        title: 'Тёртый сыр Пармезан',
        name: 'cheese',
        image: 'http://bonfit.ru/upload/iblock/956/956aa84f2f46b809074450062ff95847.jpg'
      },
      {
        title: 'Соус цезарь',
        name: 'caesardressin',
        image: 'http://kulinarnia.ru/wp-content/uploads/2015/02/sous-dlya-salata-tsezar.jpg'
      },
      {
        title: 'Сухарики',
        name: 'crisps',
        image: 'https://i2.wp.com/foxychef.ru/wp-content/uploads/2016/02/kak-sdelat-krutony-suhariki.jpg?fit=800%2C600'
      },
      {
        title: 'Салат Цезарь',
        name: 'cesar',
        image: 'https://image.freepik.com/free-photo/caesar-salad-with-grilled-chicken-breast-parmesan-cherry-tomatoes_114579-2899.jpg'
      },
    {
        title: 'Салат Греческий',
        name: '12',
        image: 'https://image.freepik.com/free-photo/healthy-food-greek-salad-with-fresh-vegetables_2829-3591.jpg'
      },
     {
        title: 'Салат Капрезе',
        name: '12',
        image: 'https://zira.uz/wp-content/uploads/2018/06/kapreze-5.jpg'
      },
      {
        title: 'Салат Винегрет',
        name: '12',
        image: 'https://www.gastronom.ru/binfiles/images/20190306/b4817eee.jpg'
      },
      {
        title: 'Салат с авокадо',
        name: '12',
        image: 'http://edinstvennaya.ua/pictures/article/16157_max.jpg'
      },
      {
        title: 'Салат с креветками',
        name: '12',
        image: 'https://image.freepik.com/free-photo/asian-egg-salad-dish-top-view_23-2148249215.jpg'
      },
      {
        title: 'Салат с тунцом',
        name: '12',
        image: 'https://vilkin.pro/wp-content/uploads/2018/09/dieticheskiy-salat-s-tuncom-770x513.jpg'
      },
      {
        title: 'Салат Оливье',
        name: '12',
        image: 'https://www.gastronom.ru/binfiles/images/20180119/b17ee29a.jpg'
      },
    ];

  ngOnInit() {
  }

}
