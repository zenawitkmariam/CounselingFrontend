import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 //public product :any[]=['ProductName','ProductNumber','Description','Price','img'];
 public productList: any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.productList =[{'ProductName':'Jacketgerrgert4ety45y54y745y54y5y4','ProductNumber':'jac-567','Description':'Jacket is made of 100% cooton , it makes the body very comfortable','Price':'100','img':'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'},
     {'ProductName':'Tshirt','ProductNumber':'tis-465','Description':'Tshirt is made of 100% cooton , it makes the body very comfortable','Price':'40','img':'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100'},
     {'ProductName':'Throuser','ProductNumber':'tr-235','Description':'Throuser is made of 100% cooton , it makes the body very comfortable','Price':'110','img':'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100'},
     {'ProductName':'Shoes','ProductNumber':'Jordan-432','Description':'Shoes is made of 100% cooton , it makes the body very comfortable','Price':'150','img':'https://rukminim1.flixcart.com/image/580/696/kkh6zrk0/jewellery-set/o/w/z/gt-ns-862-matushri-art-original-imafzt9teacakjyn.jpeg?q=50'},
     {'ProductName':'Jacket','ProductNumber':'jac-567','Description':'Jacket is made of 100% cooton , it makes the body very comfortable','Price':'100','img':'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'},
     {'ProductName':'Tshirt','ProductNumber':'tis-465','Description':'Tshirt is made of 100% cooton , it makes the body very comfortable','Price':'40','img':'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100'},
     {'ProductName':'Throuser','ProductNumber':'tr-235','Description':'Throuser is made of 100% cooton , it makes the body very comfortable','Price':'110','img':'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100'},
     {'ProductName':'Shoes','ProductNumber':'Jordan-432','Description':'Shoes is made of 100% cooton , it makes the body very comfortable','Price':'150','img':'https://rukminim1.flixcart.com/image/580/696/kkh6zrk0/jewellery-set/o/w/z/gt-ns-862-matushri-art-original-imafzt9teacakjyn.jpeg?q=50'},
   ];
  }

}
