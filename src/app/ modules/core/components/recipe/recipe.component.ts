import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { ALL_RECIPES } from '../core.constants';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  currentStep = 0;
  allRecipes = [
    {
      title: 'Салат Цезарь',
      name: 'cesar',
      ingredients: [
      {
        name: 'Помидоры',
        value: '15'
      },
        {
        name: 'Листья Салата',
        value: '15'
      },
        {
        name: 'Соус',
        value: '15'
      },
        {
        name: 'Сухарики',
        value: '15'
      },
        {
        name: 'Сыр Пармезан',
        value: '15'
      },
        {
        name: 'Куриное филе',
        value: '15'
      }],
      steps: [{
          text: 'Все ингредиенты',
          imgPath: 'https://kamelena.ru/recipes/image/300/319/0.jpg'
        },
        {
          text: 'Нарезать помидоры напополам',
          imgPath: 'https://leadinlife.info/wp-content/uploads/2017/06/img_594f18b2f4041.jpg'
        },
        {
        text: 'Порвать листья салата, выложить их на тарелку',
          imgPath: 'https://static.1000.menu/img/content/19516/salat-cezar-klassicheskii-s-kuricei_1489990053_11_min.jpg'
        },
        {
        text: 'Выложить куриные слайсы на листья салата',
          imgPath: 'https://static.1000.menu/img/content/19516/salat-cezar-klassicheskii-s-kuricei_1489990053_12_min.jpg'
        },
        {
        text: 'Полить соусом куриные слайсы и листья салата',
          imgPath: 'https://static.1000.menu/img/content/19516/salat-cezar-klassicheskii-s-kuricei_1489990053_13_min.jpg'
        },
        {
        text: 'Выложить сверху сухарики',
          imgPath: 'https://static.1000.menu/img/content/19516/salat-cezar-klassicheskii-s-kuricei_1489990053_15_min.jpg'
        },
        {
        text: 'Выложить сверху на салат сыр Пармезан',
          imgPath: 'http://karamellka.ru/wp-content/uploads/2017/04/MG_1032-300x200-e1492692148893.jpg'
        },
        {
        text: 'Выложить нарезанные помидоры',
          imgPath: 'http://salatli.ru/wp-content/uploads/rgsrjhptbe.jpg'
        },
        {
        text: 'Готовое блюдо',
          imgPath: 'https://image.freepik.com/free-photo/caesar-salad-with-grilled-chicken-breast-parmesan-cherry-tomatoes_114579-2899.jpg'
        }],
    },
    {title: 'Соус Цезарь',
  name: 'caesardressin',
  ingredients: [
  {
    name: 'Яйца 4 шт',
    value: '15'
  },
    {
    name: 'Винный уксус 1 столовая ложка',
    value: '15'
  },
    {
    name: 'Чеснок 1 зубчик',
    value: '15'
  },
  {
    name: 'Соль',
    value: '15'
  },
  {
    name: 'Молотый черный перец',
    value: '15'
  },
  {
    name: 'Оливковое масло 100 мл',
    value: '15'
  },
  {
    name: 'Вустерширский соус 2 чайные ложки',
    value: '15'
  }],
  steps: [{
      text: 'Помыть 4 яйца ',
      imgPath: 'https://sgushhenka.ru/wp-content/uploads/2019/03/kurinye-yajca.jpg'
    },
    {
      text: 'Взбить 4 яйца ',
      imgPath: 'https://i0.wp.com/maminapechka.ru/wp-content/uploads/2013/08/DSC_0044.jpg?ssl=1'
    },
    {
      text: 'Добавить соль и перец',
      imgPath: 'https://st3.depositphotos.com/2934765/19068/i/1600/depositphotos_190684758-stock-photo-salt-and-pepper-peas-on.jpg'
    },
    {
      text: 'Мелко порезать зубчик чеснока. Добавить в миску со взбитыми яйцами. ',
      imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/114080/pub_5b7ebf859dd01100aa700ebe_5b7ec0dcd83c5800ae7dd9f0/scale_600'
    },
    {
      text: 'Добавить 1 столовую ложку винного уксуса',
      imgPath: 'https://i1.wp.com/heaclub.ru/tim/d7699b2c1e9a8b4dc239ecc7393b44e2.jpg'
    },
    {
      text: 'Добавить 2 чайные ложки вустерширского соука',
      imgPath: 'https://produktoff.com/static/upload/goods/7/27207_square.jpg'
    },
    {
      text: 'Добавить 100 мл оливкового масла',
      imgPath: 'https://sc01.alicdn.com/kf/UT8Cz3dX8haXXagOFbXU/FINAL-RIVIERA-OLIVE-OIL-GLASS-0-75.jpg'
    },
    {
      text: 'Взбить масса ',
      imgPath: 'https://2d-recept.com/wp-content/uploads/2019/04/dobavlyaem-pastu-iz-anchousov-1.jpg'
    },
    {
      text: 'Соус готов',
      imgPath: 'https://img07.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120214155832/181030130511/p_O.jpg'
    },
  ]
    },
    {title: 'Сухарики',
    name: 'crisps',
    ingredients: [],
  steps: [{
      text: 'Взять багет и нож',
      imgPath: 'https://img.mysku-st.ru/uploads/images/05/71/32/2017/05/26/33ce3e.jpg'
    },
    {
      text: 'Порезать багет кубиками',
      imgPath: 'https://myberghoff.ru/wp-content/uploads/grenki-dlya-cezarya-kak-sdelat_4.jpg'
    },
    {
    text: 'Разогреть духовку на 200 градусов',
      imgPath: 'https://sovkusom.ru/wp-content/uploads/blog/k/kak-ispolzovat-duhovku/3.jpg'
    },
    {
      text: 'Положить порезаный хлеб на противень, посолить и добавить специй',
      imgPath: 'http://doma-edim.ru/wp-content/uploads/2014/08/DSC_0336.jpg'
    },
    {
    text: 'Поставить противень в духовку',
      imgPath: 'https://hmcaprise.ru/wp-content/uploads/maksimalnaya-temperatura-v-duhovke-gazovoj-plity_22.jpg'
    },
    {
    text: 'Достать противень из духовки через 15 минут',
      imgPath: 'https://myberghoff.ru/wp-content/uploads/grenki-dlya-cezarya-kak-sdelat_13.jpg'
      }]
    },
    {title: 'Мытые овощи (помидор и листья салата)',
    name: 'vegetables',
  steps: [{
      text: 'Взять помидоры и листья салата',
      imgPath: 'https://st2.depositphotos.com/4189501/10023/i/950/depositphotos_100231630-stock-photo-lettuce-and-cherry-tomatoes-and.jpg'
    },
    {
      text: 'Помыть овощи под проточной водой',
      imgPath: 'https://image.freepik.com/free-photo/_13339-41466.jpg'
    },
    {
    text: 'Положить овощи в миску, чтобы они высыхали',
      imgPath: 'https://st2.depositphotos.com/2343333/6164/i/950/depositphotos_61645537-stock-photo-lettuce-and-tomatoes.jpg'
    }]
    },
    {title: 'Тёртый сыр Пармезан',
    name: 'cheese',
    steps: [{
      text: 'Взять брусок сыра Пармезан и тёрку для сыра',
      imgPath: 'https://image.shutterstock.com/image-vector/piece-parmesan-cheese-rubbed-on-600w-1307626429.jpg'
    },
    {
      text: 'Натереть пармезан в миску',
      imgPath: 'http://fozzyshop.com.ua/86601-thickbox_default/syr-parmezan-tertyj.jpg'
    },
    ]},
    {title: 'Жареные куриные слайсы',
  name: 'friedchickenpieces',
  steps: [{
      text: 'Взять зачищенное куриное филе',
      imgPath: 'https://thumbs.dreamstime.com/b/peito-de-frango-cru-no-fundo-branco-93752545.jpg'
    },
    {
      text: 'Посолить куриное филе',
      imgPath: 'https://infoeda.com/wp-content/uploads/2016/12/Massa_soli_v_lozhke_%D0%9C%D0%B0%D1%81%D1%81%D0%B0-%D1%81%D0%BE%D0%BB%D0%B8-%D0%B2-%D0%BB%D0%BE%D0%B6%D0%BA%D0%B5.jpg'
    },
    {
      text: 'Жарить куриное филе с двух сторон до золотой корочки с помощью щипцов. Осторожно, горячо!',
      imgPath: 'https://www.gastronom.ru/binfiles/images/20160419/b54a5a18.jpg'
    },
    {
    text: 'Переложить куриное филе со сковороды и дать ему остыть',
      imgPath: 'http://v.img.com.ua/b/600x500/d/c0/a6479d4a0ed5086588ae5880fd8cec0d.jpg'
    },
    {
    text: 'Порезать жареное куриное филе слайсами',
      imgPath: 'http://image1.thematicnews.com/uploads/images/00/00/45/2016/08/12/155408628d.jpg'
    }]
    }
];

  currentStepData;
  recipeName;
  recipe;
  data;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log(this.allRecipes);

    this.recipeName = this.route.snapshot.queryParams.recipe;
    this.recipe = this.allRecipes.find(item => item.name === this.recipeName);
    if (!this.recipe) {
      this.recipe = this.allRecipes[0];
    }
    this.setCurrentItem();
    console.log(this.recipe );
  }

  getData() {
    console.log('data');
  }

  setCurrentItem() {
    this.currentStepData = this.recipe.steps[this.currentStep];
  }

  chooseStep(i) {
    this.currentStep = i;
    this.setCurrentItem();
  }

  nextStep() {
    if (this.currentStep >= this.recipe.steps.length - 1) {
      return;
    }
    this.currentStep = this.currentStep + 1;
    this.setCurrentItem();
  }

  backStep() {
    if (this.currentStep === 0) {
      return;
    }
    this.currentStep = this.currentStep - 1;
    this.setCurrentItem();
  }

  finish() {}
}
