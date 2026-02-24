import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: '6.1" Super Retina XDR, OLED, 2556x1179, iOS, A16 Bionic, камера 48+12 Мп',
      price: 387895,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/h17/84594704891934.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h34/h17/84594704891934.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h0c/84594705219614.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 M2 8/256Gb',
      description: '13.6" Liquid Retina, 2560x1664, Apple M2, ОЗУ 8 ГБ, SSD 256 ГБ, macOS',
      price: 429990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509343137822.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509343137822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8-256gb-102948748/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods Pro 2',
      description: 'беспроводные, внутриканальные, активное шумоподавление, Bluetooth 5.3',
      price: 89990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84340404535326.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84340404535326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hf9/84340404863006.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84340404535326.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-113677668/'
    },
   {
      id: 4,
      name: 'Планшет Samsung Galaxy Tab S9 FE 10.9" 6/128Gb',
      description: '10.9" IPS, 2304x1440, Exynos 1380, ОЗУ 6 ГБ, SSD 128 ГБ, Android 13',
      price: 159990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h8a/84634786103326.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h8a/84634786103326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h3c/84634786431006.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-10-9-6-128gb-113730514/'
    },
    {
      id: 5,
      name: 'Смарт-часы Apple Watch Series 9 45mm',
      description: 'корпус из алюминия, Always-On Retina LTPO OLED, GPS, Wi-Fi, Bluetooth, пульс, ЭКГ',
      price: 189990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/hab/84983943462942.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h91/hab/84983943462942.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45mm-114882634/'
    },
    {
      id: 6,
      name: 'Кофеварка DeLonghi ECAM 22.110.SB',
      description: 'автоматическая, для капсул, давление 15 бар, резервуар 1.8 л, мощность 1450 Вт',
      price: 239990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/h0f/63957937192990.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h0f/63957937192990.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h0c/84594705219614.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/delonghi-ecam-22-110-sb-3698848/'
    },
    {
      id: 7,
      name: 'Пылесос Dyson V15 Detect Absolute',
      description: 'беспроводной, циклонный фильтр, мощность 230 Вт, время работы 60 мин, для сухой уборки',
      price: 299990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h74/64399129772062.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h74/64399129772062.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-102525982/'
    },
    {
      id: 8,
      name: 'Телевизор LG OLED65C3RLA 65"',
      description: '65" OLED, 4K Ultra HD, Smart TV, частота 120 Гц, HDR, Wi-Fi, Bluetooth',
      price: 649990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h74/64509343137822.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h74/64509343137822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled65c3rla-113677668/'
    },
    {
      id: 9,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'SSD 1 ТБ, 2 беспроводных контроллера, поддержка 4K, HDR, игры для PS5',
      price: 289990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114882634/'
    },
    {
      id: 10,
      name: 'Фен Dyson Supersonic HD07',
      description: 'мощность 1600 Вт, ионизация, 4 насадки, для всех типов волос, бесщеточный двигатель',
      price: 179990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd07-102525982/'
    }

  ];
}
