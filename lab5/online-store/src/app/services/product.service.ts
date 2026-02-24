import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: '6.1" Super Retina XDR, OLED, 2556x1179, iOS, A16 Bionic',
      price: 387895,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/h17/84594704891934.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h34/h17/84594704891934.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h0c/84594705219614.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
      categoryId: 1
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S24 256Gb',
      description: '6.2" Dynamic AMOLED 2X, 2340x1080, Snapdragon 8 Gen 3',
      price: 449990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h8a/84634786103326.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h8a/84634786103326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h3c/84634786431006.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-114882634/',
      categoryId: 1
    },
    {
      id: 3,
      name: 'Смартфон Google Pixel 8 128Gb',
      description: '6.2" OLED, 1080x2400, Google Tensor G3, камера 50 Мп',
      price: 299990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-128gb-113677668/',
      categoryId: 1
    },
    {
      id: 4,
      name: 'Смартфон Xiaomi 14 Ultra 512Gb',
      description: '6.73" AMOLED, 3200x1440, Snapdragon 8 Gen 3, камера 50 Мп',
      price: 399990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-512gb-114882634/',
      categoryId: 1
    },
    {
      id: 5,
      name: 'Смартфон OnePlus 12 256Gb',
      description: '6.82" LTPO AMOLED, 1440x3168, Snapdragon 8 Gen 3',
      price: 329990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-12-256gb-113137790/',
      categoryId: 1
    },
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 M2 8/256Gb',
      description: '13.6" Liquid Retina, 2560x1664, Apple M2, ОЗУ 8 ГБ',
      price: 429990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509343137822.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509343137822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8-256gb-102948748/',
      categoryId: 2
    },
    {
      id: 7,
      name: 'Ноутбук ASUS ROG Zephyrus G14',
      description: '14" QHD, 2560x1600, AMD Ryzen 9, RAM 16 ГБ, SSD 1 ТБ',
      price: 549990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h74/64399129772062.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h74/64399129772062.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-102525982/',
      categoryId: 2
    },
    {
      id: 8,
      name: 'Ноутбук Lenovo Legion 5 Pro',
      description: '16" WQXGA, 2560x1600, AMD Ryzen 7, RAM 16 ГБ, SSD 512 ГБ',
      price: 459990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/h0f/63957937192990.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h0f/63957937192990.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-113677668/',
      categoryId: 2
    },
    {
      id: 9,
      name: 'Ноутбук Dell XPS 15',
      description: '15.6" OLED, 3840x2400, Intel Core i9, RAM 32 ГБ, SSD 1 ТБ',
      price: 699990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-114882634/',
      categoryId: 2
    },
    {
      id: 10,
      name: 'Ноутбук HP Pavilion 15',
      description: '15.6" FHD, Intel Core i5, RAM 8 ГБ, SSD 512 ГБ',
      price: 289990,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-113137790/',
      categoryId: 2
    },
    {
      id: 11,
      name: 'Наушники Apple AirPods Pro 2',
      description: 'беспроводные, внутриканальные, активное шумоподавление, Bluetooth 5.3',
      price: 89990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84340404535326.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84340404535326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hf9/84340404863006.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84340404535326.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-113677668/',
      categoryId: 3
    },
    {
      id: 12,
      name: 'Наушники Sony WH-1000XM5',
      description: 'полноразмерные, беспроводные, активное шумоподавление, 30ч работы',
      price: 129990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hf9/84340404863006.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hf9/84340404863006.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84340404535326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-102525982/',
      categoryId: 3
    },
    {
      id: 13,
      name: 'Наушники JBL Tune 760NC',
      description: 'беспроводные, полноразмерные, активное шумоподавление, 35ч работы',
      price: 44990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tune-760nc-114882634/',
      categoryId: 3
    },
    {
      id: 14,
      name: 'Наушники Samsung Galaxy Buds2 Pro',
      description: 'внутриканальные, беспроводные, активное шумоподавление, 24-bit Hi-Fi',
      price: 59990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-113137790/',
      categoryId: 3
    },
    {
      id: 15,
      name: 'Наушники Huawei FreeBuds Pro 3',
      description: 'внутриканальные, беспроводные, активное шумоподавление, LDAC',
      price: 49990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-freebuds-pro-3-102948748/',
      categoryId: 3
    },
    {
      id: 16,
      name: 'Планшет Samsung Galaxy Tab S9 FE 10.9" 6/128Gb',
      description: '10.9" IPS, 2304x1440, Exynos 1380, ОЗУ 6 ГБ, SSD 128 ГБ',
      price: 159990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h8a/84634786103326.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h8a/84634786103326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h3c/84634786431006.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-10-9-6-128gb-113730514/',
      categoryId: 4
    },
    {
      id: 17,
      name: 'Планшет Apple iPad Air 11" 128Gb',
      description: '11" Liquid Retina, 2360x1640, Apple M1, ОЗУ 8 ГБ, SSD 128 ГБ',
      price: 299990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h74/64399129772062.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h74/64399129772062.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-128gb-114882634/',
      categoryId: 4
    },
    {
      id: 18,
      name: 'Планшет Xiaomi Pad 6 8/256Gb',
      description: '11" IPS, 2880x1800, Snapdragon 870, ОЗУ 8 ГБ, SSD 256 ГБ',
      price: 129990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/h0f/63957937192990.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h0f/63957937192990.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-256gb-113137790/',
      categoryId: 4
    },
    {
      id: 19,
      name: 'Планшет Lenovo Tab P12 8/256Gb',
      description: '12.7" IPS, 2944x1840, MediaTek Dimensity 7050, ОЗУ 8 ГБ',
      price: 139990,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-8-256gb-102525982/',
      categoryId: 4
    },
    {
      id: 20,
      name: 'Планшет Huawei MatePad 11.5" 8/256Gb',
      description: '11.5" IPS, 2200x1440, Snapdragon 7 Gen 1, ОЗУ 8 ГБ, SSD 256 ГБ',
      price: 119990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd2/64509344448542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h10/64509343793182.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h80/84594705547358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-8-256gb-113677668/',
      categoryId: 4
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
