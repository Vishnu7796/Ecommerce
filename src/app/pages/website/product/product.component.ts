import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productList : any[] = [];
  
  constructor(private ProductSrv: ProductService, private router:Router){ }

  ngOnInit(): void {
    this.ProductSrv.getProducts().subscribe((res : any)=>{
      this.productList = res.data;
    });
  }

  onAddtoCart(prod: any){
    const obj = {
      "CartId": 0,
      "CustId": 379,
      "ProductId": prod.productId,
      "Quantity": 1,
      "AddedDate": new Date()
    };
    this.ProductSrv.addToCart(obj).subscribe((res: any) => {
      debugger;
      if(res.result) alert('added to cart');
      else alert(res.message);
      this.ProductSrv.cartUpdated$?.next(true);
    })
  }
}
