import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, 'Product1', 11, 3.5, 'This is the Product 1', ['Cate1', 'Cate2']),
      new Product(2, 'Product2', 16, 4.5, 'This is the Product 2', ['Cate3', 'Cate2'])
    ];
  }

}

class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
