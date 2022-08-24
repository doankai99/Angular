import { Component } from '@angular/core';
import { Product } from './body/product_model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {
      id : 1,
      name : 'XSmax',
      description: 'Dong may iphone XSmax 512G',
      img: 'https://product.hstatic.net/1000080424/product/636767481293463872_iphone-xs-gold-4_b5f892da204e4205ae73434b3db1f80d.png',
      price : 2000,
      quantity : 1,
    },

    {
      id : 2,
      name : 'Galaxy s20',
      description: 'Dòng máy samsung mới chất lượt',
      img: 'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-xam-600x600-200x200.jpg',
      price : 1000,
      quantity : 2,
    },

    {
      id : 3,
      name : 'Oppo f7',
      description: 'Dòng máy đẹp bền của oppo',
      img: 'https://rukminim1.flixcart.com/image/416/416/jrp8r680/cases-covers/back-cover/h/q/d/noble-nz-opo-f7-tran-01-original-imaf6ghkemmmmnmh.jpeg?q=70',
      price : 500,
      quantity : 3,
    }
  ]

  deleteProduct(productid : number){
    alert (" You want remove product" + productid);
    //xóa sản phẩm
    const index = this.products.findIndex(product => product.id === productid);

    if(index !== -1){
      this.products.splice(index,1)
    }
    //tính tổng số lượng sản phẩm và tổng tiền

    let numberItem = 0;
    let subTotal = 0;

    for (const product of this.products){
      numberItem += product.quantity;
      subTotal += product.price * product.quantity;
    }

    // this.numberItems = numberItem;
    // this.subTotal = subTotal;
  }
  NumberItem : number = 3;
  title: any;
}
