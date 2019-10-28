import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories = [{
    title: 'Супы',
    name: 'soups',
    image: 'https://images.aif.ru/010/068/5693a07e36e2f24fa217e372e561476c.jpg'
      },
      {
        title: 'Салаты',
        name: 'salads',
        image: 'https://www.chelseasmessyapron.com/wp-content/uploads/2017/10/Sweet-Potato-Pomegranate-Salad5-1.jpg'
      },
      {
        title: 'Десерты',
        name: 'dessert',
        image: 'https://i.pinimg.com/originals/f6/57/64/f6576467a89ec8dd42965bb4697fa5c2.jpg'
      },
     {
        title: 'Напитки',
        name: 'drink',
        image: 'https://www.cosmo.com.ua/i/publications/19/830_550/napitki-dlya-pohudeniya-top-5-detoks-receptov-1838-56155.jpg'
      },
      {
        title: 'Закуски',
        name: 'appetizer',
        image: 'https://www.koolinar.ru/all_image/article/1/1524/article_1524_large.jpg'
      },
      {
        title: 'Горячие блюда',
        name: 'second-courses',
        image: 'https://www.1001eda.com/wp-content/uploads/2012/11/41_17_12_2012_2606.jpg'
      },
      {
        title: 'Заготовки',
        name: 'semimanufactures',
        image: 'https://novate.ru/files/u39567/395671030.jpg'
      },
      {
        title: 'Гарниры',
        name: 'sidedishes',
        image: 'https://novate.ru/files/u39567/395671030.jpg'
      }
    ];

  ngOnInit() {
  }

}
