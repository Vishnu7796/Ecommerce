import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  products$ !: Observable<any>;
  constructor(private productSrv: ProductService){
    this.products$ = this.productSrv.getCategory().pipe(
      map((item:any)=>{
        return item.data;
      })
    );
  }
}
