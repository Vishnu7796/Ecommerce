import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent{
  activeCategoryId : number = 0;
  activeCategoryName : string = '';
  productList : any[] = [];

  constructor(private activeRoute: ActivatedRoute, private ProductSrv: ProductService) {
    this.activeRoute.params.subscribe((res:any) => {  
      debugger;
      this.activeCategoryId = res.id;
      this.onLoad();
    })
    this.activeRoute.queryParams.subscribe((res:any) => {
      debugger;
      this.activeCategoryName = res['name'];
    })
  }

  onLoad(): void {
    this.ProductSrv.getProductByCategoryId(this.activeCategoryId).subscribe((res : any) => {
      this.productList = res.data;
    });
  }
}
