import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoes } from '../typescript/product';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css'
})
export class ShopCartComponent {

  constructor(private http_method : HttpClient) {}

  map_array : { key : number, value : string[], prod : any }[] = [];

  product_remove(val : any) {
    let tmp = val.value.pop();
    // console.log(tmp);
    this.http_method.delete('http://localhost:5000/product/' + tmp).subscribe((resDatafromDelete : any) => {
      console.log(resDatafromDelete);   
      this.http_method.get('http://localhost:5000/product').subscribe(() => {

      });   
    })
    if(val.value.length === 0) {
      this.map_array = this.map_array.filter(obj => obj !== val)
    }
  }

  ngOnInit() {

    this.http_method.get('http://localhost:5000/product').subscribe((resData : any) => {
      for(var x of resData) {
        let find = this.map_array.find(val => val.key === x.local_id);
        if(find !== undefined) {
          find.value.push(x._id);
        }
        else {
          let tmp = {
            key: x.local_id,
            value: [x._id],
            prod: x,
          };
          this.map_array.push(tmp);
        }
      }
      this.map_array = this.map_array.reverse();
      
      // this.Shoes_list = resData.reverse();
    });
    
  }
}


// testing vercel (9:50 .... 15/11/2024)