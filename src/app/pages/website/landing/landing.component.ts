import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  
  categoryList: any[] = [];
  cartList : any[] = [];
  constructor(private ProductSrv: ProductService, private router:Router){ 
    this.ProductSrv.cartUpdated$?.subscribe((res: any) => {
      this.ProductSrv.getCartProductsByCustomerId(379).subscribe((res: any) =>{
        this.cartList = res.data;
      });
    });
  }

  ngOnInit(): void {
    this.ProductSrv.getCategory().subscribe((res : any)=>{
      this.categoryList = res.data;
    });
    this.ProductSrv.getCartProductsByCustomerId(379).subscribe((res: any) =>{
      this.cartList = res.data;
    })
  }

  rmFromCart(id: number){
    this.ProductSrv.rmFromCart(id).subscribe((res: any) => {
      debugger;
      if(res.result){
        alert("Removed From Cart");
        this.ProductSrv.getCartProductsByCustomerId(379).subscribe((res:any) =>{
          this.cartList = res.data;
        })
      }
    })
  }

  onClick(id : number, name: string){
    console.log(id)
    this.router.navigate(['shop','category',id], { queryParams: { name: name } });
  }
}
